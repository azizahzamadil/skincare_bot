** to npm start react
cd beautybot
npm start

*install python 3.11.9 
C:\Users\Hilmi\skincare_bot> & "C:\Program Files\Python311\python.exe" -m venv venv311
C:\Users\Hilmi\skincare_bot> venv311\Scripts\activate

** kena install python 3.11.9 dulu 
cd skincare_bot
"C:\Program Files\Python311\python.exe" -m venv venv311
venv311\Scripts\Activate
pip install flask pandas numpy==1.24.4 scikit-learn scikit-surprise flask-cors mysql-connector-python

nk all the change logs from this conversation
tanya model language apa yg btul2 sesuai

| Component        | Source                                             | Status                       |
| ---------------- | -------------------------------------------------- | ---------------------------- |
| **Product Data** | Fetched from `beautybot_db.products` table (MySQL) | ✅ No more `.sql` or `.pkl`   |
| **CBF Logic**    | Done in real-time via Flask using skin type tags   | ✅ Based on questionnaire     |
| **CF Logic**     | Still uses simulated user ratings (via `surprise`) | ✅ Stored `cf_score` in MySQL |
| **Hybrid Logic** | Combines `cbf_score` + `cf_score` with α = 0.6     | ✅ Computed live in backend   |


**terminal 1: nana\Scripts\activate
python server.py

terminal 2: cd beautybot
npm start