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

db.getCollection(collectionName).find({"limit":{$gt:10000}},
{_id:0,account_id:1})


/*db.getCollection("urunler").find({},{name:1,price:1,spec:{ram:1}});*/


db.getCollection(collectionName).find({
    limit:{$exists:10000}
},{_id:0})