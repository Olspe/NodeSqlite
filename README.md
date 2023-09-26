# NodeSqlite
,,<
## Project Definition
This is a REST API project built with NodeJS's Express library for setting up the server and endpoints, and the knex library for connecting to the Sqlite3 database. There are 3 tables in the databse and they are,  
**emp**: has the columns empi, empname, email, branch, car  
**branch**: has the columns branchid, branchname, location  
**cars**: has the columns carid, carname, brand

## Setup
The folowing steps are how to get started running this project  
**Step 1:** Fork and/or download this project    

**Step 2:** Download and install something like postman to make Http requests with. You can install postman from here https://www.postman.com . See the section where it says **Download the Desktop App for**. The lightweight version should be enough (no need to sign up for an account). For a tutorial on postman see here https://www.youtube.com/watch?v=wmz1sGZp814

**Step 3:** Open up this project in your editor of choice, thought I recommend using VScode. In a terminal or in the VScode's terminal, type the command "npm run dev" to start the server with "server auto refresh enabled" (restarts the server whenver it detects changes in files) or just type "npm start" then press enter  

## EndPoint
The follow are the endpoints exposed in this project  

### GET Endpoints
/cars  
/emp  
/branches  

### Post Endpoints
/cars  
/emp  
/branches  

### Patch Endpoints
/cars/:id  
/emp/:id  
/branches/:id  

### Delete Endpoints
/cars/:id  
/cars  
/emp/:id  
/emp  
/branches/:id  
/branches  

