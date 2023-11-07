/*
db.collection.deleteOne(filter,option)
*/

databaseName = "kutuphane"
collectionName = "kahve"
use(databaseName)
// db.getCollection(collectionName).find({name:"Cevaplar1111"})
db.getCollection(collectionName).deleteOne({name:"Cevaplar1111"})