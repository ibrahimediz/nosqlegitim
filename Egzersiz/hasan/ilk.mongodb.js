/*
sample_guides içindeki planets koleksiyonundan ilk satırdaki
verinin çekilmesi
*/

/*
databaseName = "sample_guides"
collectionName = "planets"
use(databaseName)
db.getCollection(collectionName).findOne()
*/
dbName = "kutuphane"
colName = "kitap"
use("kutuphane")
db.getCollection(collectionName).findOne()