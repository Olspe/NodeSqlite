const knex= require("../knex");

function getAllEmployees(){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("emp").select("*")  
        resolve(p)
        
    })
    return myPromise.then((empDict) => empDict).catch((e) =>e)
  };

  
function createEmployee(emp){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("emp").insert(emp);  
        resolve(p)
        
    })
    return myPromise.then((id) => id).catch((e) => e)

};
function deleteEmployeeById(id){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("emp").where("empid", id).del();  
        resolve(p)
        
    })
    return myPromise.then((rows) => rows).catch((e) => e.message)
};

function deleteEmployees(emp){
    const myPromise = new Promise((resolve, reject) => {
        console.log(emp[0])
        let p = knex("emp").whereIn('empid', emp).del()  
        resolve(p)
        
    })
    return myPromise.then((rows) => rows).catch((e) => e)
};
function updateEmployee(id, emp){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("emp").where("empid", id).update(emp, ['empid','empname','email','branch','car']);  
        resolve(p)
        
    })
    return myPromise.then((emp) => emp).catch((e) => e)
};


module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployeeById,
    deleteEmployees
}

