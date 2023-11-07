//##################################################
// $type birlikte  kullanımı 
//----------------------------------------
// databaseName = "sample_airbnb"
// collectionName = "listingsAndReviews" 
// use(databaseName)
// db.getCollection(collectionName).find(
//     {
//         minimum_nights:{$type:["string"]}
//     }
// )
// db.getCollection(collectionName).find(
//     {
//         minimum_nights:{$type:["string","number"]}
//     }
// )
//##################################################




//##################################################
// $size birlikte  kullanımı 
//----------------------------------------
// databaseName = "kutuphane"
// collectionName = "urunler"
// use(databaseName)
// db.getCollection(collectionName).find({
//     $or:[{color:{$size:2}},{color:{$size:1}}]},
//     {name:1,color:1}
// )

//##################################################


//##################################################
// $all birlikte  kullanımı 
//----------------------------------------
// databaseName = "kutuphane"
// collectionName = "urunler"
// use(databaseName)
// db.getCollection(collectionName).find({
//     // $and:[
//     //     {color:"black"},
//     //     {color:"white"}
//     // ]
//     // {color:{$eq:"black",$eq:"white"}},
//     color:{$all:["black","white"]},
// })
//##################################################


//##################################################
// $elemMatch birlikte  kullanımı 
//----------------------------------------
databaseName = "sample_supplies"
collectionName = "sales"
use(databaseName)
// db.getCollection(collectionName).findOne()
db.getCollection(collectionName).find(
    {
        // $and:[
        //     {"items.name":{$eq:"notepad"}},
        //     {"items.quantity":{$gte:2}}

        // ]

        items:{
            $elemMatch:{
                name:"notepad",quantity:{$gte:1},price:{$lte:40}
            }
        }
    }

)
//##################################################

