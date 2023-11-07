use("sample_analytics")
db.getCollection("accounts").find(
    {
        $and:[
            {limit:{$gte:10000}},
            {products:{ $in:["InvesmentStocck","Derivatives"]}}
        ]                  
    }
)


