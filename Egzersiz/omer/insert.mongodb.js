/**
 * dbName = "kutuphane"
colName = "kitap"
use("kutuphane")

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
    'kayit_yapan':"Ömer ALTAN",
}

dokuman2 = {
    'isbn':null,
    'coksatan':false,
    'fiyat':32.25,
    'sayfa':NumberInt("120"),
    'baslik':"Araba Sevdası",
    'baski_tarihi': new Date(),
    'pattern':/\d+/,
    'satin_alan':["Ali",5,"İsmail",3],
    'yazar':{'isim':"İhsan Oktay",'soyisim':"ANAR"},
    'kayit_yapan':"Ömer ALTAN",
}
 */

// db.getCollection(colName).insertOne(dokuman)

// dokumanlar = [dokuman,dokuman2]
// db.getCollection(colName).insertMany(dokumanlar,{ordered:true})

dokuman = {
    'fiyat':32.25,
    'marka':"Araba Sevdası",
    'kayit_tarihi': new Date(),
    "HDD":[],
    'islemci':"",
    'ram':"",
    'os':"",
    'kayit_yapan':"Ömer ALTAN",
}

use("donanim")

db.getCollection("bilgisayar").insertOne(dokuman)