dbName = "kutuphane"
colName = "kitap"
use("kutuphane")
dokuman={
    'isbn':null,
    'coksatan':true,
    'fiyat':50.25,
    'sayfa':NumberInt("254"),
    'baslik':"abc",
    'baski_tarihi':new Date(),
    'pattern':/\d+/,
    'satin_alan':["Ali",5],   
    'yazar':{'isim':"İhsan Oktay",'soyisim':"ANAR"},
    'kayit_yapan':"İbrahim EDİZ",
}

dbName="donanim"
colName= "bilgisayar"

dokuman = {
    'fiyat':25.25,
    'sayfa':NumberInt("254"),
    'baslik':"abc",
    'baski_tarihi': new Date(),
    'pattern':/\d+/,
    'satin_alan':["Ali",5,"İsmail",3],
    'yazar':{'isim':"Recaizade",'soyisim':"Efendi"},
    'kayit_yapan':"seyda",
}

use(dbName)
db.getCollection(colName).insertOne(dokuman)