const express = require("express");
const app = express();
const bp = require("body-parser");
const env = require("dotenv").config();
const mysql = require("mysql2");
const { removeAllListeners } = require("nodemon");
const router = express.Router();
app.use("/", router);
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

var connection = mysql.createConnection({
    host: process.env.db_server,
    user: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name,
});
connection.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
});

//create
app.post("/createStudent", (req, res) => {

    const student1 = req.body;
    console.log(student1);
    connection.query("INSERT INTO personal_info SET ?", student1, (error, results, fields) => {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'New student has been created successfully.'
        });
    });
});

//Update
app.put("/updateStudent", (req, res) => {

    const student1 = req.body;
    console.log(student1);
    connection.query("UPDATE personal_info SET Birthdate = ? WHERE StudentID = ?", [student1.Birthdate, student1.StudentID] , (error, results, fields) => {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'student has been updated successfully.'
        });
    });
});

//Delete
app.delete("/deleteStudent", (req, res) => {

    const student1 = req.body;
    console.log(student1);
    connection.query("DELETE FROM personal_info WHERE StudentID = ?", student1.StudentID, (error, results, fields) => {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'New student has been deleted successfully.'
        });
    });
});


//Selete all
app.get("/students", (req, res) => {
    connection.query('SELECT * FROM personal_info', (error, results, fields) => {
        if (error) throw error;
        console.log(results.length + " rows returned");
        return res.send({
            error: false,
            message: `student lists[${results.length}rows].`,
            data: results
            
        });
    });
});

//Select where
app.get("/wstudents/:id", (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM personal_info WHERE StudentID = ?',id, (error, results, fields) => {
        if (error) throw error;
        console.log(results.length + " rows returned");
        return res.send({
            error: false,
            data: results,
            message: 'student id: '+results[0].StudentID
        });
    });
});



var PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server listening at Port:" + PORT);
});