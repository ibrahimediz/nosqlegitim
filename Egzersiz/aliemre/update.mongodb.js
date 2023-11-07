/*
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
dbName = "envanter"
colName = "it"
use(dbName)

// dokuman = {
//     'fiyat':32.25,
//     'marka':"",
//     "HDD":[],
//     'islemci':"",
//     'ram':"",
//     'os':"",
//     'kayit_zaman': new Date(),
//     'kayit_yapan':"Ali Emre IŞIK"
// }

// db.getCollection("it").insertOne(dokuman)

//OBJECTID : 654a24934707b4dbf4756c03

db.getCollection(colName).findAndModify(
    {
        query:{_id:ObjectId("654a24934707b4dbf4756c03")},
        update: {$inc:{fiyat:132.25},$set:{firma:"FİRMA İSMİ"}},
        new:true
    }
)
