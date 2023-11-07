use("envanter")
db.getCollection("it").insert(
    {
        dokuman:{
            'fiyat':32.25,
            'marka':"Araba Sevdası",
            'kayit_tarihi': new Date(),
            "HDD":[],
            'islemci':"",
            'ram':"",
            'os':"",
            'kayit_zaman': new Date(),
            'kayit_yapan':"İbrahim EDİZ",
        }                 
    }
)