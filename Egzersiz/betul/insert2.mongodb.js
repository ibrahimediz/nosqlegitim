dbName = "donanim"
colName = "bilgisayar"
use("donanim")

dokuman = {
    'fiyat':42.25,
    'marka':"Acer",
    'islemci':"Intel Core i8",
    'ram':16,
    'os':"Windows10",
    'kayit_yapan':"Betül ÇAVDAR",
    'ekran_karti':"Nvidia GeForce RTX 3050 Ti",
    'ekran_karti_hafizasi':4
}

db.getCollection(colName).insertOne(dokuman)