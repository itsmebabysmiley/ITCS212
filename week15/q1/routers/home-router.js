const express = require('express');
const home = express.Router()

home.get('/', function(req, res){
    res.render('homepage');
})

module.exports = home;