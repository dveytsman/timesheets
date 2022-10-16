const sqlite3 = require("sqlite3").verbose();
let sql;

const db = new sqlite3.Database("./timesheets.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err){
        return console.error(err.message);
    }
});

sql = 'CREATE TABLE Timesheets(id INTEGER PRIMARY KEY, Date DATE, Client TEXT, Project TEXT, Project_code TEXT, Task TEXT, Hours REAL, Hours_rounded REAL, IsBillable NUMERIC, IsInvoiced NUMERIC, IsApproved NUMERIC, firstname, lastname, Department, IsEmployee NUMERIC, Billable_rate REAL, Cost_rate TEXT, Cost_amount Integer, Currency TEXT, external_reference_url TEXT)';
// db.run(sql);

dropsql = "DROP TABLE Timesheets";
// db.run(dropsql);

//sample insert
let insertsql = 'Insert into TIMESHEETS(Client) values("Tom Cruise")'
// db.run(insertsql);
selectallsql = "SELECT * FROM TIMESHEETS";

db.all(selectallsql, [], (err, rows) => {
    if (err){
        return console.error(err.message);
    }
    rows.forEach(row=> console.log(row));
})

selectclientdata = "SELECT * FROM TIMESHEETS WHERE Client = ?";
db.all(selectclientdata, ["Tom Cruise"], (err, rows)=> {
    if (err) return console.error(err.message);
    rows.forEach(row=> console.log(row));
});