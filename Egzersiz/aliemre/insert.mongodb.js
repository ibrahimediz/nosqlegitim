dbName = "donanim"
colName = "bilgisayar"
use("donanim")

// dokuman = {
//     'isbn':null,
//     'cokSatan':true,
//     'fiyat':50.25,
//     'sayfa':NumberInt("254"),
//     'baslik':"Puslu Kıtalar Atlası",
//     'baskiTarihi': new Date(),
//     'pattern':/\d+/,
//     'satinAlan':["Emre",5,"Ali",3],
//     'yazar':{'isim':"İhsan Oktay",'soyisim':"ANAR"},
//     'kayitYapan':"Ali Emre IŞIK",
// }

// dokuman2 = {
//     'isbn':null,
//     'cokSatan':false,
//     'fiyat':32.25,
//     'sayfa':NumberInt("120"),
//     'baslik':"1984",
//     'baskiTarihi': new Date(),
//     'pattern':/\d+/,
//     'satinAlan':["Enver",2,"Muhamet",2],
//     'yazar':{'isim':"George ",'soyisim':"ORWELL"},
//     'kayitYapan':"Ali Emre IŞIK",
// }

// db.getCollection(colName).insertOne(dokuman)

// dokumanlar = [dokuman,dokuman2]

// db.getCollection(colName).insertMany(dokumanlar)

dokuman = {
    'fiyat':32.25,
    'marka':"Araba Sevdası",
    'kayit_tarihi': new Date(),
    "HDD":[],
    'islemci':"i9",
    'ram':"",
    'os':"",
    'kayit_yapan':"İbrahim EDİZ",
}
use("donanim")
db.getCollection("bilgisayar").insertOne(dokuman)