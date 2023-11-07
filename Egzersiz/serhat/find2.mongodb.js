databaseName = "sample_analytics"
collectionName = "accounts"
use(databaseName)

db.getCollection(collectionName).find({limit:{$gte:10000}},
    {[$and:[{products{
        $in:[]
    }}]
]})