// api.js
const express = require('express');
const router = express.Router();
const Car = require('../Models/carModel');
const Joi = require('joi');
const { postCarSchema } = require('../controllers/joi');

// GET all cars
router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new car with Joi validation
router.post('/cars', async (req, res) => {
    const { error } = postCarSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { name, price } = req.body;
    const car = new Car({
        name: name,
        price: price
    });

    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// GET individual car by ID
router.get('/cars/:id', async (req, res) => { // Updated route to /cars/:id
    try {
        const carId = req.params.id;
        const car = await Car.findById(carId);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT request to update individual car by ID
router.put('/cars/:id', async (req, res) => {
    try {
        const carId = req.params.id;
        const { name, price } = req.body;
        const updatedCar = await Car.findByIdAndUpdate(carId, { name, price }, { new: true });
        if (!updatedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(updatedCar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE request to remove individual car by ID
router.delete('/cars/:id', async (req, res) => {
    try {
        const carId = req.params.id;
        const deletedCar = await Car.findByIdAndDelete(carId);
        if (!deletedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json({ message: 'Car deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;






