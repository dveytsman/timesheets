const knex = require("./knex");

function createTimesheet(timesheet){
    return knex("timesheets").insert(timesheet);
}

function findTimesheets(){}

function getAllTimesheets(){
    return knex("timesheets").select("*");
}

knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.timestamps();
  })

module.exports = {
    createTimesheet,
    findTimesheets,
    getAllTimesheets
}