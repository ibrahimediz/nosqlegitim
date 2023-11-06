# import os
# print(*os.listdir("Egzersiz/"))
# filename = "ilk"
# ekListe = ["emin"]
# for item in ekListe:
#     os.mkdir(f"Egzersiz/{item}")
#     open(f"Egzersiz/{item}/{filename}.mongodb.js","a+")

# veri = {"isim":"İbrahim","Soyisim":"EDİZ","il":"ANKARA"}
# veri2 = {"isim":"İBRAHİM","Soyisim":"EDİZ","ilçe":"Çankaya"}
# veri.update(veri2)
# print(veri)

# {'isim': 'İBRAHİM', 
# 'Soyisim': 'EDİZ', 
# 'il': 'ANKARA', 
# 'ilçe': 'Çankaya'}

import os 
dosyaismi = "ilk"
# print(os.listdir("Egzersiz/"))
for item in os.listdir("Egzersiz/"):
    if not os.path.exists(f"Egzersiz/{item}"):
        os.mkdir(f"Egzersiz/{item}")
    open(f"Egzersiz/{item}/{dosyaismi}.mongodb.js","a+")
 