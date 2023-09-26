const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const carsdb = require("./Service/CarDBService");
const branchesdb = require("./Service/BranchDBService");
const empdb = require("./Service/EmployeeDBService");

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

//HTTP endpoints to access the employee table 

/**
 * Retrieves all car entries from the 'emp' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing all rows. On failure returns json 
 * containing Error message and info
 */
 app.get("/emp", async (req, res) => {
    const emp = await empdb.getAllEmployees();
    if(emp.errno){
        res.status(400).json({"Error": emp.message, "type": emp});
    }
    else{
        res.status(200).json({emp});
    }
});

/**
 * adds a new entry into the 'emp' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing id of the new row. On failure returns json 
 * containing Error message and info
 */
app.post("/emp", async (req, res) => {
    const result = await empdb.createEmployee(req.body);
    if(result[0]){//maybe use typeof result[0] == number
        //if successful result is of form [1] where 1 is the id of the new entry. HTTP 201 reponse status
        res.status(201).json({id: result[0]});
    }
    else{
        //if unsuccessful return error message and error type. along with HTTP 400 response status
        res.status(400).json({"Error": result.message, "type": result});
    }
});


/**
 * updates an entry in the 'emp' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing updated row. On failure returns json 
 * containing Error message and info
 */
app.patch("/emp/:id", async (req, res) => {
    const result = await empdb.updateEmployee(req.params.id, req.body);
    if(result.errno){
        res.status(400).json({"Error": result.message, "type": result});
    }
    else{
        res.status(200).json({result});

    }

});


/**
 * deletes an entry in the 'emp' table by a given id
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing number of rows that were deleted. On failure returns json 
 * containing Error message and info
 */
app.delete("/emp/:id", async (req, res) => {
    const result = await empdb.deleteEmployeeById(req.params["id"]);
    //if result is an error object, then return json with the error message and info. Response status set to 400
    if(typeof result != 'number'){
        res.status(400).json({"Error": result.message, "type": result});
    }
    else{
        //if successful return number of rows affected. along with HTTP 200 response status
        res.status(200).json({ rowsAffected: result });
    }
});


/**
 * deletes an entry or entries in the 'emp' table. Multiple entries can be delted by passing a json array 
 * such as
 * [
    [12,13]
*  ] 
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing number of rows that were deleted. On failure returns json 
 * containing Error message and info
 */
app.delete("/emp", async (req, res) => {
    const result = await empdb.deleteEmployees(req.body);
    //if result is an error object with the key 'errno', then return json with the error message and info
    if(result.errno){
        res.status(400).json({"Error": result.message, "type": result});
        
    }
    else{
        //if successful return number of rows affected along with HTTP 200 response status
        res.status(200).json({ rowsAffected: result });
    }
});



//HTTP endpoints to access the branches table
/**
 * Retrieves all branches entries from the 'branches' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing all rows. On failure returns json 
 * containing Error message and info
 */
 app.get("/branches", async (req, res) => {
    const branches = await branchesdb.getAllbranches();
    if(branches.errno){
        res.status(400).json({"Error": branches.message, "type": branches});
    }
    else{
        res.status(200).json({branches});
    }
});

/**
 * adds a new entry into the 'branches' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing id of the new row. On failure returns json 
 * containing Error message and info
 */
app.post("/branches", async (req, res) => {
    const result = await branchesdb.createBranch(req.body);
    if(result[0]){//maybe use typeof result[0] == number
        //if successful result is of form [1] where 1 is the id of the new entry. HTTP 201 reponse status
        res.status(201).json({id: result[0]});
    }
    else{
        //if unsuccessful return error message and error type. along with HTTP 400 response status
        res.status(400).json({"Error": result.message, "type": result});
    }
});


/**
 * updates an entry in the 'branches' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing updated row. On failure returns json 
 * containing Error message and info
 */
app.patch("/branches/:id", async (req, res) => {
    const result = await branchesdb.updateBranch(req.params.id, req.body);
    if(result.errno){
        res.status(400).json({"Error": result.message, "type": result});
    }
    else{
        res.status(200).json({result});

    }

});


/**
 * deletes an entry in the 'branches' table by a given id
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing number of rows that were deleted. On failure returns json 
 * containing Error message and info
 */
app.delete("/branches/:id", async (req, res) => {
    const result = await branchesdb.deleteBranchById(req.params["id"]);
    //if result is an error object, then return json with the error message and info. Response status set to 400
    if(typeof result != 'number'){
        res.status(400).json({"Error": result.message, "type": result});
    }
    else{
        //if successful return number of rows affected. along with HTTP 200 response status
        res.status(200).json({ rowsAffected: result });
    }
});


/**
 * deletes an entry or entries in the 'branches' table. Multiple entries can be delted by passing a json array 
 * such as
 * [
    [12,13]
*  ] 
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing number of rows that were deleted. On failure returns json 
 * containing Error message and info
 */
app.delete("/branches", async (req, res) => {
    const result = await branchesdb.deleteBranches(req.body);
    //if result is an error object with the key 'errno', then return json with the error message and info
    if(result.errno){
        res.status(400).json({"Error": result.message, "type": result});
        
    }
    else{
        //if successful return number of rows affected along with HTTP 200 response status
        res.status(200).json({ rowsAffected: result });
    }
});



//HTTP endpoints to access the cars table 

/**
 * Retrieves all car entries from the 'cars' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing all rows. On failure returns json 
 * containing Error message and info
 */
app.get("/cars", async (req, res) => {
    const cars = await carsdb.getAllCars();
    if(cars.errno){
        res.status(400).json({"Error": cars.message, "type": cars});
    }
    else{
        res.status(200).json({cars});
    }
});

/**
 * adds a new entry into the 'cars' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing id of the new row. On failure returns json 
 * containing Error message and info
 */
app.post("/cars", async (req, res) => {
    const result = await carsdb.createCar(req.body);
    if(result[0]){//maybe use typeof result[0] == number
        //if successful result is of form [1] where 1 is the id of the new entry. HTTP 201 reponse status
        res.status(201).json({id: result[0]});
    }
    else{
        //if unsuccessful return error message and error type. along with HTTP 400 response status
        res.status(400).json({"Error": result.message, "type": result});
    }
});


/**
 * updates an entry in the 'cars' table
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing updated row. On failure returns json 
 * containing Error message and info
 */
app.patch("/cars/:id", async (req, res) => {
    const result = await carsdb.updateCar(req.params.id, req.body);
    if(result.errno){
        res.status(400).json({"Error": result.message, "type": result});
    }
    else{
        res.status(200).json({result});

    }

});


/**
 * deletes an entry in the 'cars' table by a given id
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing number of rows that were deleted. On failure returns json 
 * containing Error message and info
 */
app.delete("/cars/:id", async (req, res) => {
    const result = await carsdb.deleteCarById(req.params["id"]);
    //if result is an error object, then return json with the error message and info. Response status set to 400
    if(typeof result != 'number'){
        res.status(400).json({"Error": result.message, "type": result});
    }
    else{
        //if successful return number of rows affected. along with HTTP 200 response status
        res.status(200).json({ rowsAffected: result });
    }
});


/**
 * deletes an entry or entries in the 'cars' table. Multiple entries can be delted by passing a json array 
 * such as
 * [
    [12,13]
*  ] 
 * @param: {Object} request
 * @param: {Object} response
 * @returns: On success returns Json containing number of rows that were deleted. On failure returns json 
 * containing Error message and info
 */
app.delete("/cars", async (req, res) => {
    const result = await carsdb.deleteCars(req.body);
    //if result is an error object with the key 'errno', then return json with the error message and info
    if(result.errno){
        res.status(400).json({"Error": result.message, "type": result});
        
    }
    else{
        //if successful return number of rows affected along with HTTP 200 response status
        res.status(200).json({ rowsAffected: result });
    }
});




app.listen(8080, () => console.log(`server is runnning on port 8080`));
// console.log(`typeofid is : ${result}`)
// // if(typeof id == 'undefined'){
// //     res.status(400).json({"Error": "returned undefined"})
// // }
// // else