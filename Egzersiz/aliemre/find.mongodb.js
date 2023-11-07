/*
--------------------------------------------
db.getCollection("colName").find(query,projection)
SELECT --projection-- FROM colName WHERE query
------------------------------------------------
*/

//use("sample_guides");
//db.getCollection("inspections").findOne()
//db.getCollection("planets").find().pretty()

dbName = "sample_guides"
colName = "planets"
use(dbName)
db.getCollection(colName).find({orderFromSun:{$gt:2}},{_id:0,name:1,"surfaceTemperatureC.min":1})
//db.getCollection(colName).find({orderFromSun:{$gt:2}},{_id:0,name:1,surfaceTemperatureC:{min:1}})




/*
sample_guides içindeki planets koleksiyonundan 
güneşe gore sırası "orderFromSun" 2 den büyük olan kayıtların
 sadece isimlerini "name"
ve "surfaceTemperatureC" yüzey sıcaklıklarının min değerini listeleyelim*/


