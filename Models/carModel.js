const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

// Define Todo model
// const mongoose = require('mongoose');

// const todoSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     // Add more fields as needed
// });

// module.exports = mongoose.model('Todo', todoSchema);
