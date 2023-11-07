

//##################################################
// $project kullanımı 
// ----------------------------------------
databaseName = "sample_training"
collectionName = "zips"
use(databaseName)
db.getCollection(collectionName).aggregate(
    {
        $match:{state:"CA"}
    },
    {
        $project:
        {
            state:1,
            zip:1,
            _id:0,
            nufus:"$pop",
            sehirismi:{
                $cond: {
                if:{$lt:[9000,"$pop"]}, 
                    then:"$city",
                else:
                   "$$REMOVE"
            }
        }
    }
    }
)


// // TR470000100100000350930001

// databaseName = "hesaplar"
// collectionName = "hesapbilgi"
// use(databaseName)
// db.getCollection(collectionName).aggregate({
//     $project: {
//         sahibi:{$concat:["$isim"," ","$soyisim"]},
//         IBAN:1,
//         Ibanacik :{
//             ulkekodu:{$substr:["$IBAN",0,2]},
//             dogrulama:{$substr:["$IBAN",2,2]},
//             bankakodu:{$substr:["$IBAN",4,5]},
//             rezerv:{$substr:["$IBAN",10,1]},
//             hesapno:{$substr:["$IBAN",11,16]}
//         }
//     }
// })

//##################################################


//##################################################
// $set kullanımı 
//----------------------------------------

databaseName = "sample_training"
collectionName = "zips"
use(databaseName)
db.getCollection(collectionName).aggregate(
    {
        $set:
        {
            yer:{
                $concat:["$city"," ","$state"]
            },
            pop:10000,
            nufus:"$pop",
            sehirismi:{
                $cond: {
                if:{$lt:[9000,"$pop"]}, 
                    then:"$city",
                else:
                   "$$REMOVE"
            }
        }
    }
}
)

//##################################################

//##################################################
// $out kullanımı 
//----------------------------------------



databaseName = "sample_training"
collectionName = "zips"
use(databaseName)
db.getCollection(collectionName).aggregate(
    {
        $match:{state:"CA"}
    },
    {
        
        $set:
        {
            yer:{
                $concat:["$city"," ","$state"]
            },
            pop:10000,
            nufus:"$pop",
            sehirismi:{
                $cond: {
                if:{$lt:[9000,"$pop"]}, 
                    then:"$city",
                else:
                   "$$REMOVE"
            }
        }
    }
    },
    {
        $out:{db:"raporlar",coll:"zipRapor_1"}
        // $out:"zipRaporDBYok"
    }
)