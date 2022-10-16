const knex = require("./knex");

function createTimesheet(timesheet){
    return knex("timesheets").insert(timesheet);
}

function findTimesheets(){}

function getAllTimesheets(){
    return knex("timesheets").select("*");
}

module.exports = {
    createTimesheet,
    findTimesheets,
    getAllTimesheets
}