
const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
const connectToDatabase = function() {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = connectToDatabase;