const express = require("express");
const app = express();
const bp = require("body-parser");
const mysql = require("mysql2");
const { removeAllListeners } = require("nodemon");
const router = express.Router();
const path = require("path");
app.set("view engine", "ejs");
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

//add new student
app.post("/add", (req, res) => {

    const student1 = req.body;
    console.log(student1);
    connection.query("INSERT INTO personal_info SET ?", student1, (error, results, fields) => {
        if (error) {
            res.send("<h1>ERROR</h1>");
            throw error
        }
        return res.send('New student has been created successfully.');
    });
});
//Update student mobile phone
app.post("/update", (req, res) => {
    const student1 = req.body;
    console.log(student1);
    connection.query("UPDATE personal_info SET MobilePhone = ? WHERE StudentID = ?", [student1.MobilePhone, student1.StudentID] , (error, results, fields) => {
        if (error) {
            res.send("<h1>ERROR</h1>");
            throw error
        }
        return res.send('Student has been updated successfully.');
    });
});
//Delete student by ID.
app.post("/delete", (req, res) => {
    const student1 = req.body;
    console.log(student1);
    connection.query("DELETE FROM personal_info WHERE StudentID = ?", student1.StudentID, (error, results, fields) => {
        if (error) {
            res.send("<h1>ERROR</h1>");
            throw error
        }
        return res.send('Student has been deleted successfully.');
    });
});
//search students by ID.
app.post("/search", (req, res) => {
    const id = req.body.id;
    connection.query('SELECT * FROM personal_info WHERE StudentID = ?',id, (error, results, fields) => {
        if (error) {
            res.send("<h1>ERROR</h1>");
            throw error
        }
        console.log(results.length + " rows returned");
        var paintext = `Student ID: ${results[0].StudentID} <br> 
                        Name: ${results[0].Firstname} ${results[0].Lastname} <br>
                        Birthday: ${results[0].Birthdate} <br>
                        Phone: ${results[0].MobilePhone}`;
        
        return res.send(paintext);
    });
});
//search all students.
app.get("/searchall", (req, res) => {
    connection.query('SELECT * FROM personal_info', (error, results, fields) => {
        if (error) throw error;
        console.log(results.length + " rows returned");
        var paintext = '';
        for(const x of results){
            paintext += `<h3>Student ID: ${x.StudentID}</h3> 
                        Name: ${x.Firstname} ${x.Lastname} <br>
                        Birthday: ${x.Birthdate} <br>
                        Phone: ${x.MobilePhone}<br>` ;
        }
        return res.send(paintext);
    });
});

app.get("/", (req, res)=> {
    res.status(200).sendFile(path.join(__dirname,'/StudentForm.html'));
    //res.render("StudentForm");
});


var PORT = 3030;
app.listen(PORT, () => {
    console.log("Server listening at Port:" + PORT);
});