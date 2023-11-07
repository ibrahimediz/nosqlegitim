/*
use("sample_analytics")
 db.getCollection("accounts").find({
         $and:[
         {limit:{$gte:10000}},
         {products:{$in:["InvestmentStock","Derivatives"]}}
     ]
 })
*/
/*
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
*/
dbname="kutuphane"
colName="urunler"
use(dbname)
db.getCollection(colName).findAndModify(
    {
        query:{_id:3},
        update: {$inc}
    }
)