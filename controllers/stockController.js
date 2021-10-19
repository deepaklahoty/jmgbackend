var express = require('express');
var router=express.Router();

var {stock}=require('../models/employee.js')

router.get('/',(req,res)=>{
    
    stock.find((err,docs)=>{
        if(!err){
            res.send(docs);
            console.log(docs);
        }
        else{
            console.log("error")
        }

    })
}
);
module.exports=router;