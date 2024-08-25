// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../model/student'); // Import the Student model

// POST route to create a new student
router.post("/student", function (req, res) {
    const { roll_no, name, year, subjects } = req.body;
    const student = new Student({ roll_no, name, year, subjects });

    student.save()
        .then(() => res.send("Student saved"))
        .catch(err => res.status(500).send("Error saving student"));
});

// GET route to get all students
router.get("/student", function (req, res) {
    Student.find()
        .then(data => res.json(data))
        .catch(error => res.status(500).json(error));
});

// GET route to get a student by ID
router.get("/student/:id", function (req, res) {
    const studentId = req.params.id;

    Student.findById(studentId)
        .then(data => {
            if (!data) {
                return res.status(404).send("Student not found");
            }
            res.json(data);
        })
        .catch(error => res.status(500).json(error));
});

// PUT route to update a student by ID
router.put("/student/:id", function (req, res) {
    const studentId = req.params.id;
    const updatedData = req.body;

    Student.findByIdAndUpdate(studentId, updatedData, { new: true })
        .then(updatedStudent => {
            if (!updatedStudent) {
                return res.status(404).send("Student not found");
            }
            res.json(updatedStudent);
        })
        .catch(error => res.status(500).json(error));
});

// DELETE route to remove a student by ID
router.delete("/student/:id", function (req, res) {
    const studentId = req.params.id;

    Student.findByIdAndDelete(studentId)
        .then(student => {
            if (!student) {
                return res.status(404).send("Student not found with id " + studentId);
            }
            res.send({ message: "Student deleted successfully!" });
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send("Student not found with id " + studentId);
            }
            return res.status(500).send("Could not delete student with id " + studentId);
        });
});

module.exports = router;
