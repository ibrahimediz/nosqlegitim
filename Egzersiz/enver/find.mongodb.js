/*
--------------------------------------------
db.getCollection("colName").find(query,projection)
SELECT --projection-- FROM colName WHERE query
------------------------------------------------
*/

// use("sample_training");
// db.getCollection("inspections").findOne()
// db.getCollection("inspections").findOne({_id:ObjectId("56d61033a378eccde8a83551")}) // query kullanımı
// db.getCollection("inspections").findOne({"certificate_number":5381180},
// {_id:0,"result":0,"address":0})
// find
/* argumanlar
$eq
$gt $gte
$lt $lte
$and $or
$elemmatch
*/

// databaseName = "kutuphane"
// collectionName ="kitaplik"
// use(databaseName)
// db.getCollection(collectionName).find({"categories":"Java"},
// {_id:0,"title":1,"isbn":1,"categories":1})



// ##################################################
// embeded document ve arrayler  içerisinde projection kullanımı 
// ----------------------------------------
//Bu durumu gözlemlemek için veri tabanı içerisinde bir kaç veri aktaralım 
// db.getCollection("urunler").insertMany([
//     { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"),
//      "spec" : { "ram" : 4, 
//      "screen" : 6.5, 
//      "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256],"inventory":[{ qty: 1200,"warehouse": "San Jose"}]},
//     { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512],"inventory":[{ qty: 300,"warehouse": "San Francisco"}]},
//     { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128],"inventory":[{ qty: 400,"warehouse": "San Jose"},{ qty: 200,"warehouse": "San Francisco"}]},
//     { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024],"inventory":[{ qty: 1200,"warehouse": "San Mateo"}]},
//     { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
//  ])
// db.getCollection("urunler").find({},{_id:0,name:1,price:1,"spec.ram":1})
// db.getCollection("urunler").find({},{name:1,price:1,spec:{ram:1}});

// db.getCollection("urunler").find({},{name:1,"inventory.qty":1})
// db.getCollection("urunler").find({},{name:1,inventory:{qty:1}});

// ##################################################

//##################################################
// $eq kullanımı
// //----------------------------------------
// db.getCollection("urunler").find({price:{$eq:899}},{})
// db.getCollection("urunler").find({"spec.ram":{$eq:4}},{})
// db.getCollection("urunler").find({color:{$eq:"black"}},{})
// db.getCollection("urunler").find({releaseDate:{$eq:new ISODate("2020-05-14")}},{})
// //##################################################



//##################################################
// $gt büyüktür
// $gte büyük eşit
// $lt küçüktür
// $lte küçük eşit
//----------------------------------------
// db.getCollection("urunler").find({price:{$gt:699}},{name:1,price:1})
// db.getCollection("urunler").find({price:{$lt:699}},{name:1,price:1})
// db.getCollection("urunler").find({"spec.ram":{$gt:8}},{name:1,price:1,spec:{ram:1}})
// db.getCollection("urunler").find({"spec.ram":{$gte:8}},{name:1,price:1,spec:{ram:1}})
// db.getCollection("urunler").find({storage:{$gt:128}},{name:1,price:1,storage:1})

databaseName = "sample_guides"
collectionName = "planets"
use(databaseName)

db.getCollection(collectionName).find({
    orderFromSun: { $gt: 2 }
},
    {
        _id: 0, name: 1, surfaceTemperatureC: { min: 1 }
    })


   