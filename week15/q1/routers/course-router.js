const express = require('express');
const course = express.Router()

const courseJSON = require('../models/course-model').courseJSON;
course.get('/', function(req, res){
    console.log("Retrieve the course JSON");
    res.render('course',{'courses': courseJSON });
})

module.exports = course;