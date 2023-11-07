// use("sample_analytics")
// db.getCollection("accounts").find(
//     {$and:[
//         {limit:{$gte:10000}},
//         {products:{$in:["InvestmentStock", "Derivatives"]}}
//     ]}    
// )

// use("sample_airbnb")
// db.getCollection("listingsAndReviews").find(
//     {
//         $and: [
//              {
//                 image:{$exists:false} 
//              },
//              {
//                  minimum_nights:{$eq:"1"}
//              }
//         ]
//     }
// )

// databaseName = "kutuphane"
// collectionName = "urunler"
// use(databaseName)
// db.getCollection(collectionName).findAndModify(
//     {
//         query:{_id:3},
//         update: {$inc:{price:-100},$set:{name:"Yerli Milli Tab"}},
//         new:true
//     }
// )

dbName = "envanter"
colName = "it"
use("kutuphane")

dokuman = {
    'fiyat':32.25,
    'marka':"Araba Sevdası",
    'kayit_tarihi': new Date(),
    "HDD":[],
    'islemci':"",
    'ram':"",
    'os':"",
    'kayit_zaman': new Date(),
    'kayit_yapan':"İbrahim EDİZ",
}

