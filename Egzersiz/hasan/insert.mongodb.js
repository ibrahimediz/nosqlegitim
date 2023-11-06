dbName = "kutuphane"
colName = "kitap"
use("kutuphane")

dokuman = {
    'isbn':null,
    'bestSeller':true,
    'price':50.25,
    'totalPage':NumberInt("254"),
    'title':"Çalıkuşu",
    'dateOfPublication': new Date(),
    'pattern': /\d+/,
    'buyer': ['Stephen', 5 , 'John', 3],
    'recorder': 'Arnold Dalton',
}

dokuman2 = {
    'isbn':null,
    'bestSeller':false,
    'price':32.25,
    'totalPage':NumberInt("125"),
    'title':"Bir Delinin Hatira Defteri",
    'dateOfPublication': new Date(),
    'pattern': /\d+/,
    'buyer': ['Michael', 4 , 'Jack', 2],
    'recorder': 'Hawk Jerry',
}

dokuman3 = {
    'isbn':null,
    'bestSeller':true,
    'price':59.25,
    'totalPage':NumberInt("350"),
    'title':"My Name Is Red: A Novel",
    'dateOfPublication': new Date(),
    'pattern': /\d+/,
    'buyer': ['Jason', 7 , 'Jennifer', 10],
    'recorder': 'David Pain',
}

db.getCollection(colName).insertOne(dokuman)

dokumanlar = [dokuman, dokuman2, dokuman3]
db.getCollection(colName).insertMany(dokumanlar,{ordered:true})