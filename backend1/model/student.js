// models/student.js
const mongoose = require('mongoose');

// Define the schema
const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});

// Create the model
const Student = mongoose.model('Student', studentSchema);

// Export the model
module.exports = Student;
