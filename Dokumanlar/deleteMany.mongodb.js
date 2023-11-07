databaseName = "kutuphane"
collectionName = "urunler2"
use(databaseName)
db.getCollection(collectionName).deleteMany({price:{$lt:900}})

