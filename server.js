const express = require('express');
const importedfunction = require("./testexport");
const app = express();
const db = require("./db/timesheets");

app.post("/timesheets", async (req, res) => {
    const result = await db.createTimesheet(req.body);
    res.status(201).json({id: result[0]})
});

app.get("/timesheets", async (req, res) => {
    const timesheets = await db.getAllTimesheets()
    res.status(201).json({timesheets});
    // res.send("at the timesheets endpoint");
})

app.get("/timesheets/:Client", async (req, res) => {
    const timesheets = await db.findTimesheets(req.params.Client);
    res.status(201).json({timesheets});
})

app.listen(2303, () => {
    importedfunction("hi there I'm an imported function");
    console.log("server is running and listening on port 2303");
})
// importedfunction