databaseName = "kutuphane"
collectionName = "urunler" 
use(databaseName)

//##################################################
// limit 
//----------------------------------------
db.getCollection(collectionName).find({},
    {name:1,price:1}
).limit(2)
//##################################################




//##################################################
// skip 
//----------------------------------------
db.getCollection(collectionName).find({}
    // {name:1,price:1}
).skip(2)
//##################################################