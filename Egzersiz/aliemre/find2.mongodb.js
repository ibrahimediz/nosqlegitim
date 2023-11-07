/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

"sample_analytics" veritabanında 
"accounts" koleksiyonu içerisinde yer alan veriler üzerinden
"limit" 10000 den büyük ve eşit VE 
"products" alanında InvestmentStock,Derivatives ifadelerini barındıran verilerin listelenmesi
*/

dbName = "sample_analytics"
colName = "accounts"
use(dbName)

db.getCollection("accounts").find({
    $and:[
        {limit:{$gte:1000}},
        ,{
            products:{
                $in:["InvestmentStock","Derivatives"]
                }
        }
    ]
    },
    {
        //         name:1,
        //         price:1,
        //         color:1
        //     })
