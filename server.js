const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const cors = require('cors');
// const db = require("./db/timesheets");

const db = new sqlite3.Database("./timesheetEntries.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err){
        return console.error(err.message);
    }
});
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.post("/timesheets", async (req, res) => {
  db.run(
    `INSERT INTO timesheetEntries(
      date,
      client,
      project,
      projectCode,
      task,
      hours,
      hoursRounded,
      isBillable,
      isInvoiced,
      isApproved,
      firstName,
      lastName,
      department,
      isEmployee,
      billableRate,
      costRate,
      costAmount,
      currency,
      referenceURL) VALUES(? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?, ?)`, 
    [req.query.date,
    req.query.client,
    req.query.project,
    req.query.projectCode,
    req.query.task,
    req.query.hours,
    req.query.hoursRounded,
    req.query.billable,
    req.query.invoiced,
    req.query.approved,
    req.query.firstName,
    req.query.lastName,
    req.query.department,
    req.query.employee,
    req.query.billableRate,
    req.query.costRate,
    req.query.costAmount,
    req.query.currency,
    req.query.referenceUR],
    function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    return console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
    // const result = await db.createTimesheet(req.body);
    // res.status(201).json({id: result[0]})
    res.send({message: "entry has been inserted"});
});

app.delete("/timesheets", (req, res, next) => {
  db.run(`DELETE FROM timesheetEntries where client = ?`, [req.query.client], (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`row with client ${req.query.client} has been deleted`)
  })
  res.send({message: `${req.query.client} has been deleted`})
});

app.get("/timesheets", (req, res, next) => {
  console.log(req.query.client);
    db.all("SELECT * FROM timesheetEntries", [], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }

        res.status(200).json({rows});
      });
})

app.get("/timesheets/:id", (req, res, next) => {
  
    db.all("SELECT * FROM timesheetEntries where client = ?", [req.params.id], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        console.log({rows})
        res.status(200).json({rows});
      });
})

app.listen(2303, () => {
    console.log("server is running and listening on port 2303");
})
