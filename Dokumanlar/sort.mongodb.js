/*
cursor.sort({field:1})
cursor.sort({field:-1})
cursor.sort({field1:1,field2:-1})


MinKey (internal type)
Null
Numbers (ints, longs, doubles, decimals)
Symbol, String
Object
Array
BinData
ObjectId
Boolean
Date
Timestamp
Regular Expression
MaxKey (internal type)
*/

//##################################################
// sort 
//----------------------------------------
databaseName = "kutuphane"
collectionName = "urunler" 
use(databaseName)
// db.getCollection(collectionName).find({}
// ).sort({
//     name:1,

// })


// db.getCollection(collectionName).find({}
// ).sort({
//     name:1,
//     price:-1

// })

// db.getCollection(collectionName).find({}
//     ).sort({
//         "spec.ram":1
//     })


// mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/

