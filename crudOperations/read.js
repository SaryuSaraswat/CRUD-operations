// const mongoose = require('mongoose');
// const db = require('../db');
// const Car = require('../Models/carModel');


// async function readCar(name, price) {
//   try {
//     await db;
//     const result = await Car.read({name, price});
//     console.log('Car readed:', result);
//   } catch (error) {
//     console.error('Error reading car:', error);
//   }
// }
// module.exports = readCar;

const Car = require('../Models/carModel');

async function readCar(name, price) {
  try {
    const result = await Car.find({ name: name, price: price });
    console.log('Car read:', result);
  } catch (error) {
    console.error('Error reading car:', error);
    throw error;
  }
}

module.exports = readCar;

