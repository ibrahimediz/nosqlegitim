/*
--------------------------------------------
db.getCollection("colName").find(query,projection)
SELECT --projection-- FROM colName WHERE query
------------------------------------------------
*/

use("sample_training");
db.getCollection("inspections").findOne()