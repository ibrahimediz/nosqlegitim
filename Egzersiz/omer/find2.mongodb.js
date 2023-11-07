use("sample_analytics")
db.getCollection("accounts").find({limit:{$gte:1000}},{products:1,InvestmentStock:1, Derivatives:1})