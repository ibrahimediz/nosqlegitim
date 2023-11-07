use("envanter")

dokuman = {
    'fiyat':100,
    'marka':"test",
    "HDD":[512],
    'islemci':"test",
    'ram':"test",
    'os':"test",
    'kayit_zaman': new Date(),
    'kayit_yapan':"Ömer ALTAN",
}

dokuman2 = {
    'fiyat':200,
    'marka':"test2",
    "HDD":[512],
    'islemci':"test2",
    'ram':"test2",
    'os':"test2",
    'kayit_zaman': new Date(),
    'kayit_yapan':"Ömer ALTAN",
}

dokumanlar = [dokuman,dokuman2]

db.getCollection("it").insertOne(dokumanlar)


