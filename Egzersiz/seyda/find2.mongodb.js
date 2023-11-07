$and kullanımı 
//----------------------------------------
// db.getCollection("urunler").find({
//     $and:[
//         {price:899
//         },{
//             color:{
//                 $in:["while","black"]
//             }
//         }
//     ]},
//     {
//         name:1,
//         price:1,
//         color:1
//     }
//     )
// aynı alanın birlikte kullanımı
// db.getCollection("urunler").find({
//     $and:[
//         {price:{$gt:699}},
//         {price:{$lt:899}},
//     ]
// })
// YA DA 
// db.getCollection("urunler").find(
//         {price:{$gt:699,$lt:899}}
// )

databaseName = "sample_analytics"
collectionName ="accounts"
use(databaseName)
db.getCollection(collectionName).find({
        $and:[
           {limit:{$gte:10000}},
        
{products:{$nin:["InvestmentStock","Derivatives"]}}
        ]
     })