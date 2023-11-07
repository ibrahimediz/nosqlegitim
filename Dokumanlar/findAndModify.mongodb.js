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