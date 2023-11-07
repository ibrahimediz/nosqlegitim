use("envanter")
// db.getCollection("it").insert(
//     {
//         dokuman:{
//             'fiyat':32.25,
//             'marka':"Araba Sevdası",
//             'kayit_tarihi': new Date(),
//             "HDD":[],
//             'islemci':"",
//             'ram':"",
//             'os':"",
//             'kayit_zaman': new Date(),
//             'kayit_yapan':"Erdem ŞAhlan",
//         }                 
//     }
// )

db.getCollection("it").updateOne(
    {_id:ObjectId("654a25911c41b673b8e28ae0")},
    {
        $set:{"firma":"Vizyon Akademi"},
        $inc:{"fiyat":100},
        $set:{"kayit_zaman":new Date}
    }
    )