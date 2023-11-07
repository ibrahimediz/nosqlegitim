databaseName = "sample_analytics"
collectionName = "accounts"
use(databaseName)

// "limit" 10000 den büyük ve eşit VE 
// "products" alanında InvestmentStock,Derivatives
//  ifadelerini barındıran verilerin listelenmesi


db.getCollection(collectionName).find({products:{$in:["InvestmentStock","Derivatives"]}},{_id:0,account_id:0})