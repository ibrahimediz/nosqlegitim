import sqlite3 as sql
db = sql.connect("/workspace/mongodbegitim3107/Documents/pythonDriver/DB/chinook.db")
cur = db.cursor()
query = """
SELECT name FROM sqlite_master
WHERE type = 'table' """

print(cur.execute(query).fetchall())
# cur.execute(query)
names = list(map(lambda x: x[0], cur.description))
print(names)
# liste = []
# for item in cur.fetchall():
#     sozluk = {}
#     sozluk.update(zip(names,item))
#     liste.append(sozluk)
# print(*liste,sep="\n")
