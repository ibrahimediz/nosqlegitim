dbName="donanim"
colName="bilgisayar"
use("donanim")

icerik = {
    'fiyat':50.25,
    'marka':"Acer",
    'kayitTarihi': new Date(),
    'HDD':[],
    'islemci':'Intel I7 9200',
    'ram': 'Kingston Fury',
    'os': "Windows 11",
    'kayitYapan': 'Serhat KORKMAZ'
}

db.getCollection(colName).insertOne(icerik)