/* Import express, path, body-parser  */
const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");

/* Router Module for handling routing */
const router = express.Router();
app.use("/", router); 

/* --- Your code goes here --- */
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));
app.get("/", (req, res)=>{
    res.type("text/html; charset=utf-8;");
    res.status(200).sendFile(path.join(__dirname,'/contact_us.html'));
});
app.post("/submit-form", (req, res) =>{
    console.log("Accessed Contact Us");
    console.log("Form submitted by "+req.body.name);
    const string = `<h1>Greeting <span style="background-color: #b188f7;"> ${req.body.name}</span></h1> 
                    <p>The following message has been received: <span style="background-color: #f5f57d;">${req.body.messages}</span> We will contact you via <span style="background-color: #88c1f7;">${req.body.email}</span></p>
    `;
    
    res.status(200).send(string);
});




/* --- ------------------- --- */

/* Server listening */
app.listen(3030, function () {
    console.log("Server listening at Port 3030");
});