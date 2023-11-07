/* 
pipelines
$match
$group
$sort
$limit
$project
$set
$out
--------------------------------
$min
$max
$count
$sum
$avg
*/


databaseName = "sample_training"
collectionName = "zips"
use(databaseName)
//##################################################
// $match kullanımı 
//----------------------------------------

// db.getCollection(collectionName).aggregate(
//     {
//     $match:{"state":"AL"}}
// )
//##################################################



//##################################################
// $group kullanımı 
//----------------------------------------

// db.getCollection(collectionName).aggregate(
//     {
//     $match:{"state":"AL"}
//     },
//     {$group:{
//         _id:"$city",
//         // zipcount: {$count: {}},
//         Population:{$sum:"$pop"}
//     }}
// )
//##################################################





//##################################################
// $sort kullanımı 
//----------------------------------------

// db.getCollection(collectionName).aggregate( // from 
//     {
//     $match:{"state":"AL"} // where

//     },
//     {$group:{   // group by
//         _id:"$city",
//         // zipcount: {$count: {}},
//         population:{$sum:"$pop"} // columns
//     }}, 
//     {$sort:{population:-1}} // order by
// )


//##################################################




//##################################################
// $limit kullanımı 
//----------------------------------------

// db.getCollection(collectionName).aggregate( // from 
//     {
//     $match:{"state":"AL"} // where

//     },
//     {$group:{   // group by
//         _id:"$city",
//         // zipcount: {$count: {}},
//         population:{$sum:"$pop"} // columns
//     }}, 
//     {$sort:{population:-1}},// order by
//     {$limit :5}
// )