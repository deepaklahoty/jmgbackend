const express = require('express');
const bodyParser = require('body-parser');
var empctrl= require('./controllers/stockController.js')
const {mongoose}=require('./db.js');
var app = express();
app.use(bodyParser.json());
app.listen(3000,()=>console.log("server started"));
app.use('/emp',empctrl)