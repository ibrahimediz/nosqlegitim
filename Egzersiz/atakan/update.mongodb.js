dokuman = {
    'fiyat':32.25,
    'marka':"asus",
    "HDD":[512],
    'islemci':"i5",
    'ram':"8",
    'os':"",
    'kayit_zaman': new Date(),
    'kayit_yapan':"atakan balat",
}

use("envanter")
//db.getCollection("it").insertOne(dokuman)
//654a266a1202522a51170818
db.getCollection("it").updateOne(
    {_id:ObjectId("654a266a1202522a51170818")},
    {
        $set:{firma:"Digital Vizyon Akademi",kayit_zaman:new Date()},
        $inc:{fiyat:100},
    }

)
