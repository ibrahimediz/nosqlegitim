/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

"sample_analytics" veritabanında 
"accounts" koleksiyonu içerisinde yer alan veriler üzerinden
"limit" 10000 den büyük ve eşit VE 
"products" alanında InvestmentStock,
 ifadelerini barındıran verilerin listelenmesi
*/
databaseName = "sample_analytics"
collectionName ="accounts"
use(databaseName)
db.getCollection(collectionName).find({
    $and:[
                 {limit:{$gte:10000}Derivatives
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
    
    