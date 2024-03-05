
// db.js
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/vehicles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json()); // Add this line to parse JSON bodies
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = mongoose.connection;

