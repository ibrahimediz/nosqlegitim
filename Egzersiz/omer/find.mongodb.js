//databaseName = "sample_training"
//collectionName = "inspections"
//use(databaseName)

//db.getCollection(collectionName).findOne();
//db.getCollection(collectionName).findOne({_id:ObjectId('56d61033a378eccde8a83551')})
//db.getCollection("inspections").findOne({"certificate_number":5381180}, 
//{_id:0,"result":0, "address":0})

//----------------------------------------
databaseName = "sample_guides"
use(databaseName)

// db.getCollection("urunler").find({price:{$lt:699}},{name:1,price:1})
// db.getCollection("urunler").find({"spec.ram":{$gt:8}},{name:1,price:1,spec:{ram:1}})
// db.getCollection("urunler").find({"spec.ram":{$gte:8}},{name:1,price:1,spec:{ram:1}})
// db.getCollection("urunler").find({storage:{$gt:128}},{name:1,price:1,storage:1})

// db.getCollection("planets").find({orderFromSun:{$gt:2}}, {name:1,"surfaceTemperatureC.min:1"})
// db.getCollection("planets").find({orderFromSun:{$gt:2}}, {name:1,surfaceTemperatureC:{min:1}})

// db.getCollection("urunler").find({storage:{$nin:[128,512]}})

