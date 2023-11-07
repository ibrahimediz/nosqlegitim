new_Data = {
    "name": "İpad",
    "price": 1290,
    "releaseDate": {
      "$date": "2023-01-14T00:00:00Z"
    },
    "spec": {
      "ram": 16,
      "screen": 12.3,
      "cpu": 5.2
    },
    "color": [
      "blue",
      "black"
    ],
    "storage": [
      64,
      128,
      256,
      512
    ],
    "inventory": [
      {
        "qty": 400,
        "warehouse": "San Jose"
      },
      {
        "qty": 200,
        "warehouse": "San Francisco"
      },
      {
        "qty": 50,
        "warehouse": "Ankara"
      }
    ]
  }

// db.collection.replaceOne(filter,replacement,options)

databaseName = "kutuphane"
collectionName = "urunler" 
use(databaseName)

db.getCollection(collectionName).find({name:"SmartPad122"})
// db.getCollection(collectionName)

db.getCollection(collectionName).replaceOne({_id:ObjectId("64c9febfebf5ff3366e48af1")},new_Data)

