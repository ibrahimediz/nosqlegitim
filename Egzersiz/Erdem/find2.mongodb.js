use("sample_analytics")
db.getCollection("accounts").find(
    {
        $and:[
            {limit:{$gte:100}},
            {products:{ $in:["InvesmentStocck","Derivatives"]}}
        ]                  
    }
)