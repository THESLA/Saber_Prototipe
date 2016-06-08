var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var express = require("express");

//put the folders in the server 
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/css'));
//app.use(express.static(__dirname + '/fonts'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');

});

//connection, disconnection and bi-direccional events of communication
io.on('connection', function(socket){
  
  console.log('user connected');



  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  


});

//Start the server on the port specified
//http.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  //console.log('Magic running on 8080');
//});

//RUN THIS IN LOCAL MACHINE
http.listen(8080, function(){
  console.log('Magic running on 8080');
});

