
databaseName = "sample_guides"
collectionName = "planets"
use(databaseName)
db.getCollection(collectionName).findOne()