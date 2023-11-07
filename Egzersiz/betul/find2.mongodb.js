/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

"sample_analytics" veritabanında 
"accounts" koleksiyonu içerisinde yer alan veriler üzerinden
"limit" 10000 den büyük ve eşit VE 
"products" alanında InvestmentStock,Derivatives
 ifadelerini barındıran verilerin listelenmesi
*/
databaseName = "sample_analytics"
collectionName ="accounts"
use(databaseName)
db.getCollection(collectionName).find({
    $and:[
                 {limit:{$gte:10000}
                 },{
                    "products" 
                    :{
                         $in:["InvestmentStock","Derivatives"]
                     }
                 }
             ]},
             {
                 name:1,
                 price:1,
                 color:1
             }
             )
    
   //#########################################
/* "sample_airbnb" veritabanında "listingsAndReviews" koleksiyonun da
"image" başlığı olmayan kayıtların ve "minimum_nights" başlığının 1 e eşit olduğu
kayıtların listelenmesi
*/ 
databaseName = "sample_airbnb"
collectionName ="listingsAndReviews"
use(databaseName)
db.getCollection(collectionName).find({
    $and:[
                 {limit:{$gte:10000}
                 },{
                    "products" 
                    :{
                         $in:["InvestmentStock","Derivatives"]
                     }
                 }
             ]},
             {
                 name:1,
                 price:1,
                 color:1
             }
             )