const mongo = require("mongoose");

(async () => {
    try {
        const db = await mongo.connect("mongodb://localhost:27017/MiDulceCaramelo");
        console.log("Conexión establecida en: " + db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();