/* Template for Q1: Simple Hello World */

// 1. Import the HTTP and File module
const http = require("http");
const fs = require("fs");
const url = require("url");
// 2. Create a simple server "myQ1Server"
const myQ1Server = http.createServer((req, res)=> {
    const userPath = req.url;       // Path
    /* ------ Your code goes here ------ */
    if(userPath !== "/favicon.ico"){
        console.log("Req at: "+userPath);
    }
    // #1:Root: When path is "/", repond with the plain text as “Hello World! in plain text” (status:200)
    if(userPath === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type","text/plain");
        res.write("Hello world in plain text");
        res.end();
    }

    
    // #2:TH Page: When path is "/th", respond with greeting_th.html (status:200)
    else if(userPath === "/th"){

        fs.readFile("./greeting_th.html",'utf8', function(err, data){
            res.statusCode = 200;
            res.setHeader("Content-Type","text/html; charset=utf-8;");
            res.write(data);
            return res.end();
        });
    }
    // #3:CN Page: When path is "/cn", respond with greeting_cn.html (status:200)
    else if(userPath === "/cn"){

        fs.readFile("./greeting_cn.html",'utf8', function(err, data){
            res.statusCode = 200;
            res.setHeader("Content-Type","text/html; charset=utf-8;");
            res.write(data);
            return res.end();
        });
    }
    // #4:Otherwise, respond the error in the plain text as “Where are you going”? (status:404)
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("Where are you going?");
        res.end();
    }
    /* ----------------------------------*/   
});

// Server listens/runs on Port 3030
console.log("Listening on the port 3030");
myQ1Server.listen(3030);
