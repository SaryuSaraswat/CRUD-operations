

// const mongoose = require('mongoose');
// const Car = require('../Models/carModel');

// async function deleteAllCars() {
//   try {
//     const result = await Car.deleteMany({});
//     console.log('All cars deleted:', result.deletedCount, 'cars');
//   } catch (error) {
//     console.error('Error deleting all cars:', error);
//   }
// }

// module.exports = deleteAllCars;

const mongoose = require('mongoose');
const Car = require('../Models/carModel');

async function deleteCar(name, price) {
  try {
    const result = await Car.deleteOne({ name: name, price: price });
    console.log('Car deleted:', result.deletedCount);
  } catch (error) {
    console.error('Error deleting car:', error);
  }
}

module.exports = deleteCar;
