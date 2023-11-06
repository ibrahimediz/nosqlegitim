dbName="kutuphane"
colName = "kitap"
use(dbName)

dokuman = {
    'isbn':null,
    'coksatan':true,
    'fiyat':50.25,
    'sayfa':NumberInt("254"),
    'baslik':"Puslu Kıtalar Atlası",
    'baski_tarihi': new Date(),
    'pattern':/\d+/,
    'satin_alan':["Ali",5,"İsmail",3],
    'yazar':{'isim':"İhsan Oktay",'soyisim':"ANAR"},
    'kayit_yapan':"Erdem Şahlan",
}


dokuman1 = {
    'isbn':null,
    'coksatan':true,
    'fiyat':50.25,
    'sayfa':NumberInt("254"),
    'baslik':"Araba Sevdası",
    'baski_tarihi': new Date(),
    'pattern':/\d+/,
    'satin_alan':["Ali",5,"İsmail",3],
    'yazar':{'isim':"Recaizade",'soyisim':"Efendi"},
    'kayit_yapan':"Erdem Şahlan",
}


db.getCollection(colName).insertMany(dokuman)
dokumanlar=[dokuman,dokuman1]
db.getCollection(colName).insertMany(dokumanlar,{ordered:true})



dbName="donanim"
colName="bilgisayar"


dokuman = {
    'fiyat':32.25,
    'marka':"Araba Sevdası",
    'kayit_tarihi': new Date(),
    "HDD":[],
    'islemci':"",
    'ram':"",
    'os':"",
    'kayit_yapan':"İbrahim EDİZ",
}

use(dbName)
db.getCollection(colName).insertOne(dokuman)