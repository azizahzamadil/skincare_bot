import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="nana"
)

cursor = conn.cursor()
cursor.execute("DESCRIBE products")
for row in cursor.fetchall():
    print(row)

cursor.close()
conn.close()
