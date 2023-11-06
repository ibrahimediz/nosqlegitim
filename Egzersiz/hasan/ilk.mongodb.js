import os
print(*os.listdir("Egzersiz/"))
filename = "ilk"
ekListe = ["emin"]
for item in ekListe:
    os.mkdir(f"Egzersiz/{item}")
    open(f"Egzersiz/{item}/{filename}.mongodb.js","a+")
