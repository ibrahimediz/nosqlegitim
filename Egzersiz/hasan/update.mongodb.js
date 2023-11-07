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
    {_id:1},
    {
        $unset:{price:""}
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


/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

1. "envanter" adından bir veritabanı içerisinde 
"it" adında bir koleksiyonumuz olduğunu düşünerek 
istediğimiz bilgisayarı aşağıdaki veri yapısından faydalanarak 
veritabanına ekleyelim

dokuman = {
    'fiyat':32.25,
    'marka':"",
    "HDD":[],
    'islemci':"",
    'ram':"",
    'os':"",
    'kayit_zaman': new Date()
    'kayit_yapan':"İbrahim EDİZ",
}

2. eklediğimiz verinin objectId bilgisini alalım
3. ID bilgisiyle süzülen 
kayıt içerisine firma "Digital Vizyon Akademi" bilgisini ekleyelim
4. belirlediğiniz fiyatı 100 birim daha arttıralım
5. zaman bilgisini güncelleyelim
*/


 databaseName = "kutuphane"
 collectionName = "kahve"
 use(databaseName)
 db.getCollection(collectionName).find({"name":"Cevaplar1111"})
 db.getCollection(collectionName).updateOne(
    {_id:ObjectId("64ca3518ebf5ff3366e48af7")},
    {
        $rename:{"isim":"name"}
    }
     )