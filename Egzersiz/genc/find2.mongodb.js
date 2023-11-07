databaseName = "sample_analytics"
collectionName = "accounts"
use(databaseName)
db.getCollection(collectionName).find({
        $and:[
            {price:899
            },{
                color:{
                    $in:["while","black"]
                }
            }
        ]},
        {
            name:1,
            price:1,
            color:1
        }
         )

