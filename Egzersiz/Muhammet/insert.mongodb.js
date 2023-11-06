dbName = "kutuphane"
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
    'satin_alan':["Muhammet",5,"Ahmet",3],
    'yazar':{'isim':"İhsan Oktay",'soyisim':"ANAR"},
    'kayit_yapan':"Muhammet Ali BAĞCI",
}


dokuman2 = {
    'isbn':null,
    'coksatan':false,
    'fiyat':32.25,
    'sayfa':NumberInt("120"),
    'baslik':"Araba Sevdası",
    'baski_tarihi': new Date(),
    'pattern':/\d+/,
    'satin_alan':["Muhammet",5,"Ahmet",3],
    'yazar':{'isim':"Recaizade Mahmud Ekrem",'soyisim':"Efendi"},
    'kayit_yapan':"Muhammet Ali BAĞCI",
}

db.getCollection(colName).insertOne(dokuman)

dokumanlar = [dokuman,dokuman2]

db.getCollection(colName).insertMany(dokumanlar,{ordered:true})