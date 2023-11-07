/*
mongodb+srv://myAtlasDBUser:dbuser123@myatlasclusteredu.l0kv8ie.mongodb.net
yukarıdaki bağlantı bilgisini kullanarak

"sample_analytics" veritabanında 
"accounts" koleksiyonu içerisinde yer alan veriler üzerinden
"limit" 10000 den büyük ve eşit VE 
"products" alanında InvestmentStock,Derivatives
 ifadelerini barındıran verilerin listelenmesi
*/
use("sample_analytics")
db.getCollection("accounts").find({
    $and:[
        {limit:{$gte:10000}},
        {products:{$in:["InvestmentStock","Derivatives"]}}
    ]
})



//#########################################
/* "sample_airbnb" veritabanında "listingsAndReviews" koleksiyonun da
"image" başlığı olmayan kayıtların ve "minimum_nights" başlığının 1 e eşit olduğu
kayıtların listelenmesi
*/

