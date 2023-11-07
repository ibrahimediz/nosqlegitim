from pymongo import MongoClient as client
import sqlite3 as sql
####################################################
def dbGetir(connectionString="/workspace/mongodbegitim3107/Documents/pythonDriver/DB/chinook.db"):
    """
    veritabanına bağlanan fonksiyon 
    connectionString veritabanı bağlantı metnidir.
    """
    db = sql.connect(connectionString)
    return db 

def sorguCalistir(sorgu,param=0):
    """
    ilk önce veritabanına bağlanır ardından sorguyu çalıştırıp sonucunu döner,
    eğer param 0 dan farklı bir değer gönderilirse sorgu sonucunun sütun isimlerini ikinci parametre olarak döner
    sqllite uyumlu çalışmaktadır
    """
    try:
        db = dbGetir()
        cur = db.cursor()
        sonuclar = cur.execute(sorgu)
        if param:
            names = list(map(lambda x: x[0], cur.description))
            return sonuclar.fetchall(),names
        else:
            return  sonuclar.fetchall()
    except Exception as hata:
        return ["Hata Var",hata]
    finally:
        cur.close()
        db.close()

def mongodbHazirlik(databaseName,
    collectionName,
    connectionString="mongodb+srv://dbuser:dbuser123@garantibbva.nuggick.mongodb.net/?retryWrites=true&w=majority"):
    """
    ------------------------------------------------------
    verilen veritabanı ismi ve koleksiyon ismine uygun 
    olarak bağlantı metninde yer alan clusterda koleksiyonu 
    açıp geri döner
    ------------------------------------------------------

    """
    cli = client(connectionString)
    # print(cli.list_database_names())
    for item in cli.list_database_names():
        if item == databaseName:
            print("Database Var")
    db = cli[databaseName]
    for item in db.list_collection_names():
        if item == collectionName[0]:
            print("Koleksiyon Var")
    col = db[collectionName[0]]
    return col


######## tüm tabloların listesinin alınması
def DBAktar():
    """
    sqlite veri tabanından bir veritabanının mongodb ye aktarılması için gerekli kodları yukarıdaki fonksiyonlarla beraber barındırmaktadır. 
    """
    query = """
    SELECT name FROM sqlite_master
    WHERE type = 'table' """

    tabloListesi = sorguCalistir(query)

    for tabloismi in tabloListesi:
        query = f"""
        SELECT * FROM 
        {tabloismi[0]}
        """
        sonuclar = sorguCalistir(query,1)
        isimler = sonuclar[1]
        kayitListe = sonuclar[0]
        liste = []
        for item in kayitListe:
            sozluk = {}
            sozluk.update(zip(isimler,item))
            liste.append(sozluk)
        ###################################################
        col = mongodbHazirlik("chinook",tabloismi)
        print(col.insert_many(liste).inserted_ids)

if __name__ == "__main__":
    DBAktar()