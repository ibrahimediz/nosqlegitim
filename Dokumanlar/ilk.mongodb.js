databaseName = "sample_training"
collectionName = "planets"
use(databaseName)
db.getCollection(collectionName).findOne()