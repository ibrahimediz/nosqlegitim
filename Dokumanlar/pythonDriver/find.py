from pymongo import MongoClient as client
cli = client("mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/?retryWrites=true&w=majority")
dbName = "kutuphane"
colName = "pythonAnlatim"
db = cli[dbName]
col = db[colName]

# col.find_one({query},{projection})
sonuc = col.find({
    "isim":{"$eq":"Python"}
})
for item in sonuc:
    print(item)
print(sonuc)