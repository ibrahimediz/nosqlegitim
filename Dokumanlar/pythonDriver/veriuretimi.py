import pymongo
import random
client = pymongo.MongoClient("mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/?retryWrites=true&w=majority")
db = client["kutuphane"]
col = db["kahve"]
liste = ["AliGalip","Bedirhan","Emsal","EnesAlper","Cevaplar","HilalAltinbas","Ilker",
"Melek","Melih","Muzeyyen","Necmi","Ozge","Sinan","Suat"]
kahveismi = ["Caramel Machiato","Quortado","Americano","Latte","Cappucino","Espresso","Türk Kahvesi","Tea","Chai Tea Latte"]
for i in range(1,len(liste)*4):
    data = {"isim":random.choice(liste),
    "kahve":random.choice(kahveismi),
    "boyut":random.choice(["tall","grandy","vendi"]),
    "fiyat":random.choice([item for item in range(100,10000,1000)]),
    "kupon":[1,2,3],
    "icerik":{
        "kahve":True
    }}
    result = col.insert_one(data)
    print(result.inserted_id)

# print(ord("s"))
# print(ord("S"))
# print(ord("ç"))
# print(ord("ş"))
