databaseName = "sample_airbnb"
collectionName = "listingsAndReviews" 
use(databaseName)
db.getCollection(collectionName).find(
    {
        minimum_nights:{$type:["string"]}
    }
)
db.getCollection(collectionName).find(
    {
        minimum_nights:{$type:["string","number"]}
    }
)
