const express = require("express");
const bodyParser = require('body-parser'); // Use const or let to declare bodyParser
const app = express();
const port = 3000;
require("dotenv").config()
const mongoose = require("mongoose");
// Middleware for parsing JSON bodies
app.use(bodyParser.json());

const dbURI = process.env.MONGODB_URI;

const dbConnect= require("./config/db");
const Student = require('./model/student');
const studentRoutes = require('./routes/student'); // Import the student routes

dbConnect();

app.use('/', studentRoutes); // Prefix routes with /api

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
