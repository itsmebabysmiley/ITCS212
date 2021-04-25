const express = require('express');
const student = express.Router()

const studentJSON = require('../resources/data/student.json');
student.get('/', function(req, res){
    res.render('student',{'data' : studentJSON});
})

module.exports = student;