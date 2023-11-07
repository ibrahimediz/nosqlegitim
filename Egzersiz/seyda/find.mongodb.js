
databaseName = "sample_guides"
collectionName = "planets"
use(databaseName)
db.getCollection(collectionName).find({"orderFromSun":{$gt:2}},{"name":1,"surfaceTemperatureC.min":1})
