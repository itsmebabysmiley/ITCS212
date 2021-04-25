const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config();

/* Set view engine to be rendered */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

/* Import routers of each module */
const home = require('./routers/home-router');
const course = require('./routers/course-router');
const student = require('./routers/studentinfo-router');

/* Route to the page per request */
app.use('/', home);
app.use('/course', course);
app.use('/student', student);

/* Running the server */
app.listen(process.env.PORT, function(){
    console.log('Listening at Port ' + process.env.PORT);
})