const { Router } = require('express');
var express = require('express');
var router=express.Router();

var {stock}=require('../models/employee.js')
console.log("i m here");
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

router.post('/e',(req,res)=>{
    var stockpost=new stock({
        company:req.body.company,
        number :req.body.number,
        type :req.body.type,
        quantity :req.body.quantity,
    });
    stockpost.save((err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log("error")}
    })


});
module.exports=router;