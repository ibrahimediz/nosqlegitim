
from pymongo import MongoClient as client
cli = client("mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/?retryWrites=true&w=majority")
dbName = "kutuphane"
colName = "pythonAnlatim"
db = cli[dbName]
col = db[colName]
# veri = {"isim":"Python",
# "sure":5,
# "icerik":{"seviye":5,"modul":2},
# "gerekli":[1,2,3,4,1]
# }
# sonuc = col.insert_one(veri)
# print(sonuc.inserted_id)

# veriListesi = [
#      {"isim":"Python 11",
# "sure":2,
# "icerik":{"seviye":2,"modul":2},
# "gerekli":[1,2,]
# },
#  {"isim":"Python 12",
# "sure":4,
# "icerik":{"seviye":2,"modul":2},
# "gerekli":[3,4,1]
# }
# ]
# sonuc = col.insert_many(veriListesi)
# print(sonuc.inserted_ids)
