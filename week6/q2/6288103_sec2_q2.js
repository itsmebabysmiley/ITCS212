// It just a node modules(express and nodenom)
var path = require('path');
const express = require('express');
const expressApp = express();


expressApp.get('/', (req, res) => {
    console.log("Req at:"+ req.url);
    res.status(200).send(' Hello world in plain text');
    res.end();
});
expressApp.get('/th', (req, res) => {
    console.log("Req at:"+ req.url);
    res.setHeader("Content-Type","text/html; charset=utf-8;");
    res.status(200).sendFile(path.join(__dirname,'/greeting_th.html'));

});
expressApp.get('/cn', (req, res) => {
    console.log("Req at:"+ req.url);
    res.setHeader("Content-Type","text/html; charset=utf-8;");
    res.status(200).sendFile(path.join(__dirname,'/greeting_cn.html'));

});
expressApp.get('/*', (req, res) => {
    console.log("Req at:"+ req.url);
    res.send('Where are you going?');

});
//sever start on port 3030
expressApp.listen(3030, function(){
    console.log("listening on port 3030");
});
