/* 1. "envanter" adından bir veritabanı içerisinde 
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
collectionName = "it"
use(databaseName)
// db.getCollection(collectionName).find()
db.getCollection(collectionName).insertOne({
    dokuman:{
        'fiyat':50.25,
        'marka':"Apple M2 Air",
        "HDD":[512],
        'islemci':"M2 Intel",
        'ram':"8GB",
        'os':"MacOS",
        'kayit_zaman': new Date(),
        'kayit_yapan':"Serhat KORKMAZ"
    }
})

use("envanter")
db.getCollection("it").updateOne(
    {_id:ObjectId("654a26731dfeb2d0a35a51d5")},
    {
        $set:{firma:"Digital Vizyon Akademi",kayit_zaman:new Date()},
        $inc:{fiyat:100},
    }

)