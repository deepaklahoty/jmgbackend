const { Router } = require('express');
var express = require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
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

router.post('/',(req,res)=>{
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

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var updatedata = {
        company:req.body.company,
        number :req.body.number,
        type :req.body.type,
        quantity :req.body.quantity,
    };
    stock.findByIdAndUpdate(req.params.id, { $set: updatedata }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Stock Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    stock.findByIdAndRemove(req.params.id, (err, doc) => {
        console.log("valid id")
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports=router;