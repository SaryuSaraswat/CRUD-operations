// const mongoose = require('mongoose');
// const db = require('../db');
// const Car = require('../Models/carModel');


// async function updateCar(name, price) {
//   try {
//     await db;
//     const result = await Car.update({name, price});
//     console.log('Car updated:', result);
//   } catch (error) {
//     console.error('Error updating car:', error);
//   }
// }
// module.exports = updateCar;

const Car = require('../Models/carModel');

async function updateCar(name, newPrice) {
  try {
    const result = await Car.updateOne({ name: name }, { $set: { price: newPrice }});
    console.log('Car updated:', result);
  } catch (error) {
    console.error('Error updating car:', error);
    throw error;
  }
}

module.exports = updateCar;


