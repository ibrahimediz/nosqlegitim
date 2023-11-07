/*
db.collection.updateOne(filter,update,options)

$set
$upset
$inc
$push
*/
databaseName = "kutuphane"
collectionName = "urunler2"
use(databaseName)
// ###############################
// $set
// db.getCollection(collectionName).find() // => _id : 4
// db.getCollection(collectionName).updateOne(
//     {_id:4},
//     {
//         $set:{
//             price:1099,
//             "spec.ram":16, // embeded document
//             "spec.screen":12.3,
//             "spec.cpu":2.80,
//             "storage.0": 256,
//             "storage.1": 512
//         }
//     }
//     )
// db.getCollection(collectionName).find(

// Örnek 
// databaseName = "kutuphane"
// collectionName = "urunler"
// use(databaseName)
// // db.getCollection(collectionName).find({isim:"Cevaplar"})
// db.getCollection(collectionName).updateOne(
//     {_id:1},
//     {
//         // $set:{
//         //     yer:"Ankara"
//         // },
//         $pull:{
//             storage:4
//         },
//         // $inc:{
//         //     miktar:-2
//         // }
//     })


// ###############################
// upsert opsiyonu  update insert 
// db.getCollection(collectionName).find() // => _id : 4
// db.getCollection(collectionName).updateOne(
//     {_id:949},
//     {
//         $set:{
//             price:1099,
//             "spec.ram":16, // embeded document
//             "spec.screen":12.3,
//             "spec.cpu":5.60,
//             "storage.0": 256,
//             "storage.1": 512,
//             oyun:true
//         }
//     },{upsert:true}
//     )


// ###############################
// $min
databaseName = "kutuphane"
collectionName = "urunler"
use(databaseName)
db.getCollection(collectionName).updateMany(
    {_id:{$in:[2,3,4]}},
    {
        $min:{price:649}
    }
    )
// ###############################


// ###############################
// $max
// --------------------
// databaseName = "kutuphane"
// collectionName = "urunler2"
// use(databaseName)
// db.getCollection(collectionName).updateOne(
//     {_id:2},
//     {
//         $max:{price:999}
//     }
//     )
// ###############################


// ###############################
// $mul
// --------------------
// databaseName = "kutuphane"
// collectionName = "urunler2"
// use(databaseName)
// db.getCollection(collectionName).updateOne(
//     {_id:2},
//     {
//         $mul:{price:1.1}
//     }
//     )
// ###############################




// ###############################
// $unset
// --------------------
databaseName = "kutuphane"
collectionName = "urunler"
use(databaseName)
// db.getCollection(collectionName).find({"isim":"Cevaplar1111"})
db.getCollection(collectionName).updateOne(
    {_id:ObjectId("64ca3518ebf5ff3366e48af6")},
    {
        $unset:{price:"","icerik.sut":"","kupon.4":""}
    }
    )
// ###############################



// ###############################
// $rename
// --------------------
// databaseName = "kutuphane"
// collectionName = "kahve"
// use(databaseName)
// db.getCollection(collectionName).find({"name":"Cevaplar1111"})
// db.getCollection(collectionName).updateOne(
//     {_id:ObjectId("64ca3518ebf5ff3366e48af6")},
//     {
//         $rename:{"isim":"name"}
//     }
//     )
// ###############################



// ###############################
// $pull
// --------------------
// databaseName = "kutuphane"
// collectionName = "kahve"
// use(databaseName)
// db.getCollection(collectionName).find({"name":"Cevaplar1111"})
// db.getCollection(collectionName).updateOne(
//     {_id:ObjectId("64ca3518ebf5ff3366e48af6")},
//     {
//         $pull:{"kupon":null}
//     }
//     )
// ###############################