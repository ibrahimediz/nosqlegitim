

databaseName = "sample_analytics"
collectionName ="accounts"
use(databaseName)
db.getCollection(collectionName).find({
        $and:[
           {limit:{$gte:10000}},
        
           {products:{$in:["InvestmentStock","Derivatives"]}}
            ]
        })
        use("sample_airbnb")
        db.getCollection("listingAndReviews").find({
            $and:[
                {Image:{$exist:false}},
            
                     {
                             minimum_nights:{$eq:"1"}
                         }
                     ]
                 }
        )