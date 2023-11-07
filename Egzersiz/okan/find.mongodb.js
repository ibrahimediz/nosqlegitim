
use("sample_training")

db.getCollection("inpspections").findOne({"certificate_number":5381180})

/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

"sample_guides" içindeki "planets" koleksiyonundan 
güneşe gore sırası "orderFromSun" 2 den büyük olan kayıtların
sadece isimlerini "name" ve "surfaceTemperatureC" 
yüzey sıcaklıklarının "min" değerini listeleyelim


dbName = "sample_guides"
colName = "planets"
use(dbName)
db.getCollection(colName).find({orderFromSun:{$gt:5}},{_id:0,name:1,"surfaceTemperatureC":{max:40}})



burdaki orderFromSun bizim değer karşılaştırmasını yapmaktadır
dbName = "sample_guides"
colName = "planets"
use(dbName)
db.getCollection(colName).find({orderFromSun:{$gt:3}},{_id:0,name:1,"surfaceTemperatureC":{$max:50}})

*/