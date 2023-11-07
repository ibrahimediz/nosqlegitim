// use("sample_analytics")
// db.getCollection("accounts").find(
//     {$and:[
//         {limit:{$gte:10000}},
//         {products:{$in:["InvestmentStock", "Derivatives"]}}
//     ]}    
// )

use("sample_airbnb")
db.getCollection("listingsAndReviews").find(
    {
        $and: [
            {
                image:{$exists:false} 
             },
             {
                 minimum_nights:{$eq:"1"}
             }
        ]
    }
)

