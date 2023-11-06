dbName = "kutuphane"
colName = "kitap"
use("kutuphane")

dokuman = {
    'isbn':null,
    'coksatan':true,
    'fiyat':50.25,
    'sayfa':NumberInt("254"),
    'baslik':"Puslu Kıtalar Atlası",
    'baski_trh':new Date(),
    'pattern':/\d+/,
    'satin_alan':["Ali",5,"İsmail",3],
    'yazar':{'isim':"İhsan Oktay",'soyisim':"ANAR"},
    'kayit_yapan':"Betül ÇAVDAR",
}

db.getCollection(colName).insertOne(dokuman)