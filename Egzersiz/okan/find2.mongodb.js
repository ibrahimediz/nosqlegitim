/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

"sample_analytics" veritabanında 
"accounts" koleksiyonu içerisinde yer alan veriler üzerinden
"limit" 10000 den büyük ve eşit VE 
"products" alanında InvestmentStock,Derivatives
 ifadelerini barındıran verilerin listelenmesi


databaseName = "sample_analytics"
collectionName ="accounts"
use(databaseName)

db.getCollection(collectionName).find({"limit":{$gt:10000}},
{_id:0,account_id:1})


db.getCollection("urunler").find({},{name:1,price:1,spec:{ram:1}});


db.getCollection(collectionName).find({
    limit:{$exists:10000}
},{_id:0})
*/



//#########################################
/* "sample_airbnb" veritabanında "listingsAndReviews" koleksiyonun da
"image" başlığı olmayan kayıtların ve "minimum_nights" başlığının 1 e eşit olduğu
kayıtların listelenmesi


databaseName = "sample_airbnb"
collectionName ="listingsAndReviews"
use(databaseName)

db.getCollection(collectionName).find({"image":{$gt:1}},
{_id:0,minimum_nights:1})


databaseName = "sample_supplies"
collectionName ="sales"
use(databaseName)

db.getCollection(databaseName).find(

    items:{
        #elemMatch:{
            name:"notepad",quantity:{$gte:1},price:{}
        }
    }
)*/



databaseName = "kutuphane"
collectionName = "urunler"
use(databaseName)
// db.cloneCollection(collectionName,"urunler2")
db.getCollection(collectionName).findAndModify(
    {
        query:{_id:3},
        update: {$inc:{price:-100},$set:{name:"Yerli Milli Tab 2222"}},
        new:true
    }
)