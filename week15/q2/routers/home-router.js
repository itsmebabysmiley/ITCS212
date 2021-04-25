const express = require('express');
const home = express.Router()

const CourseMng = require('../models/reminder-model').CourseMng;
const courseMng = new CourseMng();
home.get('/', async function(req, res){
    const results = await courseMng.getAllCourses();
    res.render('homepage',{'data': results});
})

module.exports = home;