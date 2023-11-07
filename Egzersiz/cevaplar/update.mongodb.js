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

dokuman = {
    'fiyat':32.25,
    'marka':"Apple",
    "HDD":[512],
    'islemci':"M1",
    'ram':"16",
    'os':"Siearra",
    'kayit_zaman': new Date(),
    'kayit_yapan':"İbrahim EDİZ",
}

use("envanter")
// 1.
// db.getCollection("it").insertOne(dokuman)
// 2.
// "654a26673ddacadfa9aee18e
// 3. , 4. , 5. 
db.getCollection("it").updateOne(
    {_id:ObjectId("654a26673ddacadfa9aee18e")},
    {
        $set:{firma:"Digital Vizyon Akademi",kayit_zaman:new Date()},
        $inc:{fiyat:100},
    }

)
