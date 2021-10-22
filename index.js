const express = require('express');
const http =require('http');
const port = process.env.PORT;
const hostname ='0.0.0.0';
const bodyParser = require('body-parser');
var empctrl= require('./controllers/stockController.js')
const {mongoose}=require('./db.js');
var app = express();
app.use(bodyParser.json());
app.listen(3000,hostname,()=>console.log("server started"));
app.use('/emp',empctrl);
