databaseName = "sample_training"
collectionName = "companies"
use(databaseName)
db.getCollection(collectionName).findOne()