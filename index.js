const express = require('express');
const http =require('http');
const port = 3000;
const hostname ='0.0.0.0';
const bodyParser = require('body-parser');
var empctrl= require('./controllers/stockController.js')
const {mongoose}=require('./db.js');
var app = express();
app.use(bodyParser.json());
app.listen(port,hostname,()=>console.log("server started"));
app.use('/emp',empctrl);
