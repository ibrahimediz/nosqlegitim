
// İlk Veriyi çekme
let database = "sample_guides"
let collection = "planets"
use(database)
db.getCollection(collection).findOne()

