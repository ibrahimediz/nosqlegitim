

databaseName = "sample_guides"
collectionName = "planets"
use(databaseName)
db.getCollection(collectionName).find({orderFromSun:{$gte:2}},{_id:0,name:1,"surfaceTemperatureC.min":1})









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