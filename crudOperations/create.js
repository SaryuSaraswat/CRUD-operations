const mongoose = require('mongoose');
const db = require('../db');
const Car = require('../Models/carModel');


async function createCar(name, price) {
  try {
    await db;
    const result = await Car.create({name, price});
    console.log('Car created:', result);
  } catch (error) {
    console.error('Error creating car:', error);
  }
}
module.exports = createCar;

