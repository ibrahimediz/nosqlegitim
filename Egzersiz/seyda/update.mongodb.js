// 2. eklediğimiz verinin objectId bilgisini alalım
// 3. ID bilgisiyle süzülen 
// kayıt içerisine firma "Digital Vizyon Akademi" bilgisini ekleyelim
// 4. belirlediğiniz fiyatı 100 birim daha arttıralım
// 5. zaman bilgisini güncelleyelim
// */

         dokuman= {
             'fiyat':32.25,
             'marka':"Sams",
             
             "HDD":[512],
             'islemci':"",
             'ram':"16",
             'os':"",
             'kayit_zaman': new Date(),
             'kayit_yapan':"seyda",
         }                 
         db.getCollection("it").updateOne(
            {_id:ObjectId("654a26673ddacadfa9aee18e")},
            {
                $set:{firma:"Digital Vizyon Akademi",kayit_zaman:new Date()},
                $inc:{fiyat:100},
            }
        
        )
    