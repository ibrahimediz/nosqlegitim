/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

1. "envanter" adından bir veritabanı içerisinde 
"it" adında bir koleksiyonumuz olduğunu düşünerek 
istediğimiz bilgisayarı aşağıdaki veri yapısından faydalanarak 
veritabanına ekleyelim

dokuman = {
    'fiyat':32.25,
    'marka':"",
    "HDD":[],
    'islemci':"",
    'ram':"",
    'os':"",
    'kayit_zaman': new Date()
    'kayit_yapan':"İbrahim EDİZ",
}

2. eklediğimiz verinin objectId bilgisini alalım
3. ID bilgisiyle süzülen 
kayıt içerisine firma "Digital Vizyon Akademi" bilgisini ekleyelim
4. belirlediğiniz fiyatı 100 birim daha arttıralım
5. zaman bilgisini güncelleyelim
*/

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
    'satin_alan':["Ali",5,"İsmail",3],
    'yazar':{'isim':"İhsan Oktay",'soyisim':"ANAR"},
    'kayit_yapan':"İbrahim EDİZ",
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
    'yazar':{'isim':"Recaizade Mahmud Ekrem",'soyisim':"Efendi"},
    'kayit_yapan':"İbrahim EDİZ",
}



dokumanlar = [dokuman,dokuman2]

db.getCollection(colName).insertMany(dokumanlar,{ordered:true})




database = 'envanter'
colName = 'it'
use(database)
dokuman = { 
    'fiyat':32.25,
    'marka':"",
    "HDD":[],
    'islemci':"",
    'ram':"",
    'os':"",
    'kayit_zaman': new Date(),
    'kayit_yapan':"GENC",
}
db.getCollection(colName).insertOne(dokuman)

//654a251bcb1cf22ff3a6b554

db.getCollection("it").updateOne(
    {_id: ObjectId("654a251bcb1cf22ff3a6b554")},
    {
        $set:{firma:"Digital Vizyon Akademi"},
        $inc:{fiyat:100}

    }
    )

