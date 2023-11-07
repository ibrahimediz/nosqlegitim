import pymongo as pym
cli = pym.MongoClient("mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/?retryWrites=true&w=majority")
"""
db.getCollection(collectionName).aggregate(
    { 
         $group:{
            _id:{
                    isim:"$item",
                    boyut:"$size"
                },
            minQty:{
                $min:"$quantity"
            },
            maxQty:{
                $max:"$price"
            },
            ortalamaTutar:{
               $avg:{$multiply:["$quantity","$price"]}
            }
        }
    },
    {
        
        $set: {
            item:{$concat:["$_id.isim"," ","$_id.boyut"]}
        }
    },
   {
    $out:{db:"raporlar",coll:"Cevaplar_kahverapor_1"}
}
)
"""
db = cli["coffeeshop"]
col = db["sales"]
pipeline = [
     { 
         "$group":{
            "_id":{
                    "isim":"$item",
                    "boyut":"$size"
                },
            "minQty":{
                "$min":"$quantity"
            },
            "maxQty":{
                "$max":"$price"
            },
            "ortalamaTutar":{
               "$avg":{"$multiply":["$quantity","$price"]}
            }
        }
    },
    {
        
        "$set": {
            "item":{"$concat":["$_id.isim"," ","$_id.boyut"]}
        }
    },
   {
    "$out":{"db":"raporlar","coll":"pythondan_kahverapor_1"}
}
]
sonuclar = col.aggregate(pipeline)
print(db.command("aggregate","sales",pipeline=pipeline,explain=True))
