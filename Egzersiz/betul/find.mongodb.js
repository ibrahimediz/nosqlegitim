/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

sample_guides içindeki planets koleksiyonundan 
güneşe gore sırası "orderFromSun" 2 den büyük olan kayıtların
sadece isimlerini "name" ve "surfaceTemperatureC" 
yüzey sıcaklıklarının min değerini listeleyelim
*/

databaseName = "sample_guides"
collectionName ="planets"
use(databaseName)
db.getCollection(collectionName).find({orderFromSun:{$gt:2}},{_id:0,name:1})


