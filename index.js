const createCar = require('./crudOperations/create');
const readCar = require('./crudOperations/read');
const updateCar = require('./crudOperations/update');
const deleteCar = require('./crudOperations/delete');


createCar('tata nexon' , 12);
createCar('mahindra' , 18);
createCar('lamborgani' , 54);
createCar('thar' , 19);

deleteCar('tata nexon', 12);

readCar('lamborgani', 18)

updateCar('lamborgani' , 18);




