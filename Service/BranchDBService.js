const knex= require("../knex");

function getAllBranches(){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("branches").select("*")  
        resolve(p)
        
    })
    return myPromise.then((branchesDict) => branchesDict).catch((e) =>e)
  };

  
function createBranch(branch){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("branches").insert(branch);  
        resolve(p)
        
    })
    return myPromise.then((id) => id).catch((e) => e)

};
function deleteBranchById(id){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("branches").where("branchid", id).del();  
        resolve(p)
        
    })
    return myPromise.then((rows) => rows).catch((e) => e.message)
};

function deleteBranches(branches){
    const myPromise = new Promise((resolve, reject) => {
        console.log(branches[0])
        let p = knex("branches").whereIn('branchid', branches).del()  
        resolve(p)
        
    })
    return myPromise.then((rows) => rows).catch((e) => e)
};
function updateCar(id, branch){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("branches").where("branchid", id).update(branch, ['branchid','branchname','location']);  
        resolve(p)
        
    })
    return myPromise.then((branch) => branch).catch((e) => e)
};


module.exports = {
    getAllBranches,
    createBranch,
    updateCar,
    deleteBranchById,
    deleteBranches
}

