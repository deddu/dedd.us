#!/usr/bin/env node
var express = require('express');
var fs = require('fs');
var index=('index.html');

var app = express();

app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/coffee", express.static(__dirname + '/coffee'));
app.get('/', function(request, response) {
    fs.readFile("./index.html", function read(err,data){
    if (err ){
        throw err;
        response.writeHead(400, {"Content-Type":"text/plain"});
        response.write("index not found");
        response.end();
    }
    content=data;
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(content);
    response.end();
    });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  //readfile()
  console.log("Listening on " + port);
});
