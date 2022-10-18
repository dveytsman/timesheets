# Timesheets

This is a sample application using SQLite3, NodeJS, Express

## To run the app locally
1. open 2 terminal windows
2. in the first terminal window navigate to the root folder and run `node server.js` 
or if developing run `nodemon server.js` (this will allow for server restart when making changes)
3. in the second terminal window navigate to the /client directory within the root and run `npm start`
4. navigate to Open [http://localhost:3000](http://localhost:3000)
 on your browser to get to the landing page of the application


 ## testing the backend API
 you can use postman to test all of the routes or use the browser to test get routes.

 #Get all timesheets endpoint: [http://localhost:2303/timesheets](http://localhost:2303/timesheets)

 #get timesheets by client endpoint: http://localhost:2303/(client) substituting the client's name as it is in the DB

 #post a timesheet by sending a post request to http://localhost:2303/timesheets with the parameters as follows: date, client, project, projectCode, task, hours, hoursRounded, billable, invoiced, approved, firstName, lastName, department, employee, billableRate, costRate, costAmount, currency, referenceURL




