use("sample_training");

// db.getCollection("inspections").findOne()
// db.getCollection("inspections").findOne({_id:ObjectId("56d61033a378eccde8a83551")}) // query kullanımı

db.getCollection("inspections").findOne({"certificate_number":5381180},
{_id:0,"result":0,"address":0})