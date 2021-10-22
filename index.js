const cors = require('cors');
const express = require('express');
var app = express();
app.use(cors());
const http =require('http');
const port = process.env.PORT;
const hostname ='0.0.0.0';
const bodyParser = require('body-parser');
var empctrl= require('./controllers/stockController.js')
const {mongoose}=require('./db.js');
app.use(bodyParser.json());
app.listen(port,hostname,()=>console.log("server started"));
app.use('/emp',empctrl);
