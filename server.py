# server.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from surprise import Dataset, Reader, SVD

app = Flask(__name__)
CORS(app)

TAGS = ["dry", "oily", "acne_prone", "sensitive", "combination", "normal", "aging", "pigmentation"]

def get_mysql_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="nana"
    )

def compute_user_profile(answers):
    profile = {tag: 0 for tag in TAGS}

    mapping = {
        "dry": ["Tight or dry"],
        "oily": ["Oily all over", "Shiny all over face"],
        "combination": ["Oily or shiny in some areas", "Looks shiny, especially on forehead, nose, and chin (T-zone)"],
        "normal": ["Comfortable and balanced"],
        "acne_prone": ["Very often", "Occasionally"],
        "sensitive": ["Very sensitive", "Somewhat sensitive"],
        "pigmentation": ["Yes, many spots", "A few spots", "Slight unevenness"],
    }

    for ans in answers.values():
        if isinstance(ans, list):
            for item in ans:
                for tag, keywords in mapping.items():
                    if item in keywords:
                        profile[tag] += 1
        else:
            for tag, keywords in mapping.items():
                if ans in keywords:
                    profile[tag] += 1

    return profile

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    print("✅ Received answers:", data)

    try:
        conn = get_mysql_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute("SELECT * FROM products")
        products = cursor.fetchall()

        if not products:
            return jsonify([])

        df = pd.DataFrame(products)

        # === Step 1: CBF score ===
        profile = compute_user_profile(data)
        user_vec = np.array([[profile[tag] for tag in TAGS]])

        product_vectors = []
        for skin in df["skin_type"]:
            vec = {tag: 0 for tag in TAGS}
            for tag in skin.lower().replace(" ", "").split(","):
                if tag in vec:
                    vec[tag] += 1
            product_vectors.append(list(vec.values()))

        similarities = cosine_similarity(user_vec, np.array(product_vectors))[0]
        df["cbf_score"] = similarities

        # === Step 2: Simulate CF score ===
        user_ids = [f"User{i}" for i in range(1, 11)] + ["You"]
        ratings = []

        for uid in user_ids[:-1]:  # Fake users
            samples = df.sample(20, random_state=np.random.randint(1000))
            for _, row in samples.iterrows():
                ratings.append((uid, int(row["product_id"]), round(np.random.uniform(3, 5), 1)))

        liked_ids = df.sample(5, random_state=42)["product_id"].tolist()
        for pid in liked_ids:
            ratings.append(("You", int(pid), 5.0))

        ratings_df = pd.DataFrame(ratings, columns=["user", "item", "rating"])
        reader = Reader(rating_scale=(1, 5))
        data_surprise = Dataset.load_from_df(ratings_df, reader)
        trainset = data_surprise.build_full_trainset()

        model = SVD()
        model.fit(trainset)

        preds = []
        for pid in df["product_id"]:
            pred = model.predict("You", int(pid)).est
            preds.append(pred)

        df["cf_score"] = preds

        # === Step 3: Update CF scores in MySQL ===
        update_cursor = conn.cursor()
        for idx, row in df.iterrows():
            update_cursor.execute(
                "UPDATE products SET cf_score = %s WHERE product_id = %s",
                (round(float(row["cf_score"]), 4), int(row["product_id"]))
            )
        conn.commit()

        # === Step 4: Hybrid score ===
        df["cf_score"] = df["cf_score"].fillna(0)
        alpha = 0.6
        df["hybrid_score"] = alpha * df["cbf_score"] + (1 - alpha) * df["cf_score"]

        # === Step 5: Return Top Recommendations ===
        top = df.sort_values("hybrid_score", ascending=False).head(20)

        print("🎯 Top Hybrid Results:")
        for i, row in top.iterrows():
            print(f"- {row['name']} (Hybrid: {row['hybrid_score']:.3f})")
            
            
        # added routine_type
        return jsonify(top[["product_id", "name", "routine_type"]].rename(columns={"product_id": "id"}).to_dict(orient="records"))

    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"error": str(e)}), 500
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

if __name__ == "__main__":
    app.run(debug=True)
