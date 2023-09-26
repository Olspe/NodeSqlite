const knex= require("../knex");

function getAllCars(){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("cars").select("*")  
        resolve(p)
    })
    return myPromise.then((carsDict) => carsDict).catch((e) =>e)
  };


function createCar(car){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("cars").insert(car);  
        resolve(p)
    })
    return myPromise.then((e) => e).catch((e) => e)

};


function deleteCarById(id){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("cars").where("carid", id).del();  
        resolve(p)
    })
    return myPromise.then((rows) => rows).catch((e) => e.message)
};



function deleteCars(cars){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("cars").whereIn('carid', cars).del()  
        resolve(p)
        
    })
    return myPromise.then((rows) => rows).catch((e) => e)
};



function updateCar(id, car){
    const myPromise = new Promise((resolve, reject) => {
        let p = knex("cars").where("carid", id).update(car, ['carid','carname','brand']);  
        resolve(p)
        
    })
    return myPromise.then((car) => car).catch((e) => e)
};


module.exports = {
    createCar,
    getAllCars,
    updateCar,
    deleteCarById,
    deleteCars
}
