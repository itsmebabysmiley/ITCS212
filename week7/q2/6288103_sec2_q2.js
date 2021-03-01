/* Import express, path, body-parser  */
const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");
const env = require("dotenv").config();
const mysql = require("mysql");
/* Router Module for handling routing */
const router = express.Router();
app.use("/", router);

/* --- Your code goes here --- */
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));
//connect to db server
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

//get student first name, last name, and GPA from db
router.get("/cis-students", (req, res)=> {
  console.log("Retrieved all courses in tinycollege...");
  connection.query("SELECT stu_fname, stu_lname, stu_gpa FROM student WHERE dept_code='CIS' ORDER BY stu_fname ASC",  (error, results, fields)=> {
    if (error) throw error;
    console.log(results.length + " rows returned");
    return res.send(results);
  });
});
//create unorder lists.
router.get("/cis-students-list", (req, res)=> {
  console.log("Retrieved all CIS students in tinycollege (List)...");
  connection.query("SELECT stu_fname, stu_lname, stu_gpa FROM student WHERE dept_code='CIS' ORDER BY stu_fname ASC", (err, results, fields)=> {
    if (err) throw err;
    console.log(results.length + " rows returned");
    let list = "<h1>CIS Students</h1><ul>";
    results.forEach(stu => {
        list += "<li>" + stu.stu_fname + "&nbsp;" + stu.stu_lname + "&nbsp;(GPA:" + stu.stu_gpa +")" + "</li>";
    });
    list += "</ul>";
    res.send(list);
  });
});

/* --- ------------------- --- */

/* Server listening */
var PORT = process.env.PORT;
app.listen(PORT, ()=> {
  console.log("Server listening at Port:" + PORT);
});
