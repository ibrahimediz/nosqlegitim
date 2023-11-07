use("sample_guides")
 //db.getCollection("inspections").findOne({_id:ObjectId("56d61033a378eccde8a83551")}) // query kullanımı

 //db.getCollection("inspections").findOne({"certificate_number":5381180},{_id:0,"result":1,"address":1})

 //db.getCollection("planets").find({"orderFromSun":{$gt:2},},{"name":1,"surfaceTemperatureC.min":1})


 /*db.getCollection("planets").find(
    {
        $and:[
            {orderFromSun:{$eq:1}},
            {hasRings:{$eq:false}},
            {"surfaceTemperatureC.max":{$eq:427}}     
    ]
    }
    )*/