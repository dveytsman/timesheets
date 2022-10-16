const knex = require("knex");

const knexed = knex({
    client: "sqlite3",
    connection: {
        filename: "timesheets.sqlite3"
    }, 
    useNullAsDefault: true
});

module.exports = knexed;