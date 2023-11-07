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

database = 'envanter'
colName = 'it'
use(database)
dokuman = {
    'fiyat':45.25,
    'marka':"Apple",
    "HDD":[256],
    'islemci':"M1",
    'ram':"16GB",
    'os':"sierra",
    'kayit_zaman': new Date(),
    'kayit_yapan':"EK",
}
db.getCollection(colName).insertOne(dokuman)



db.getCollection(colName).updateOne(
    {_id: ObjectId('654a249c2c5226ccb6f2d671')},
    {
        $push:{fiyat:fiyat+100}

    }
    )

