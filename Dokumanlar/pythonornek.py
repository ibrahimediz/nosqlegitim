############# Verinin Alınması
from pymongo import MongoClient as client
cli = client("mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net/?retryWrites=true&w=majority")
dbName = "kutuphane"
colName = "urunler"
db = cli[dbName]
col = db[colName]

sonuc = col.find({},{"_id":0,"name":1,"price":1})
sonuc = [item for item in sonuc]


###### Veri tabanına aktarım
import sqlite3 as sql
import os 
print(os.path.join("workspace","nosqlegitim","Dokumanlar"))
db = sql.connect("veri.db")
cur = db.cursor()
cur.execute("""
CREATE TABLE IF NOT EXISTS URUNLER
(KAYITID INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
ISIM TEXT NOT NULL)
""")
try:
    for item in sonuc:
        cur.execute(f"INSERT INTO URUNLER (ISIM) VALUES ('{item["name"]}')")
    else:
        db.commit()
except Exception as hata:
    print(hata)
    db.rollback()
finally:
    cur.close()
    db.close()