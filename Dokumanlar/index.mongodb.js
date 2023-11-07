
databaseName = "sample_training"
collectionName = "zips"
use(databaseName)
// db.getCollection(collectionName).find({
//     state:"CA"
// }).explain('executionStats')

// db.getCollection(collectionName).createIndex({state:1}) // index
// db.getCollection(collectionName).getIndexes()
// db.getCollection(collectionName).dropIndex("state_1")
// db.getCollection(collectionName).createIndex({state:-1,zip:1}) // compound index
// db.getCollection(collectionName).getIndexes()
db.getCollection(collectionName).createIndex({_id:1,zip:1},{unique:true})
db.getCollection(collectionName).getIndexes()
// db.getCollection(collectionName).dropIndex("state_1")