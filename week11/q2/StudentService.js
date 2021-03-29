const express = require("express");
const app = express();
const bp = require("body-parser");
const mysql = require("mysql2");
const router = express.Router();
const path = require("path");
var cors = require('cors');
app.use(cors());
app.use("/", router);
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "itcs212-2",
});
connection.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
});
router.post("/createStudent", (req, res) => {

    const student1 = req.body;
    if(!student1){
        return res.status(400).send({ error: true, message: "Please provide student information"});
    }
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
router.put("/updateStudent", (req, res) => {

    const student1 = req.body;
    if(!student1 || !student1.StudentID){
        return res.status(400).send({ error: true, message: "Please provide student information"});
    }
    console.log(student1);
    connection.query("UPDATE personal_info SET ? WHERE StudentID = ?", [student1, student1.StudentID] , (error, results, fields) => {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'student has been updated successfully.'
        });
    });
});

//Delete
router.delete("/deleteStudent", (req, res) => {

    const student1 = req.body;
    if(!student1.StudentID){
        return res.status(400).send({ error: true, message: "Please provide student information"});
    }
    console.log(student1);
    connection.query("DELETE FROM personal_info WHERE StudentID = ?", student1.StudentID, (error, results, fields) => {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'Student has been deleted successfully.'
        });
    });
});


//Selete all
router.get("/students", (req, res) => {
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
router.get("/wstudents/:id", (req, res) => {
    const id = req.params.id;
    if(!id){
        return res.status(400).send({ error: true, message: "Please provide student information"});
    }
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
router.get("/", (req, res)=> {
    res.status(200).sendFile(path.join(__dirname,'/StudentForm.html'));
});

var PORT = 3030;
app.listen(PORT, () => {
    console.log("Server listening at Port:" + PORT);
});

