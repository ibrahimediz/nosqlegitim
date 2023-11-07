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

databaseName = "envanter"
collectionName ="it"
use(databaseName)

dokuman = {
    'fiyat':78.99,
    'marka':"Acer",
    "HDD":[],
    'islemci':"Intel Core i8",
    'ram':"16",
    'os':"Windows10",
    'kayit_zaman': new Date(),
    'kayit_yapan':"Betül ÇAVDAR"
}
//db.getCollection(collectionName).insertOne(dokuman)

db.getCollection(collectionName).find({},{_id:1})

db.getCollection(collectionName).updateOne({})