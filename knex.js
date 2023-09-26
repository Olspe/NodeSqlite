const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "./SqliteDatabase/mydb.db"
    }
});

module.exports = connectedKnex;