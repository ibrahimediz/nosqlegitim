dbName = "kutuphane"
colName = "kitap"
use("kutuphane")

kitapBilgi1 = {
    'isbn': null,
    'baslik': 'Kırmızı Başlıksız Kız',
    'yeni': false,
    'sayfa': NumberInt('254'),
    'fiyat': 231,
    'baskiTarihi': new Date(),
    'satinAlan': ['Muhammed', 2, 'Ali', 4],
    'yazar': { 'isim': 'Piraye', 'soyisim': undefined },
    'kayitYapan': 'Muhammed Muhammed'

} 
kitapBilgi2 = {
    'isbn': null,
    'baslik': 'Kırmızı Başlıklı Kız',
    'yeni': false,
    'sayfa': NumberInt('254'),
    'fiyat': 231,
    'baskiTarihi': new Date(),
    'satinAlan': ['Enver', 2, 'Ali', 4],
    'yazar': { 'isim': 'Piraye', 'soyisim': undefined },
    'kayitYapan': 'test'

} 
db.getCollection(colName).insertOne(kitapBilgi)



