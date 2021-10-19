const mongoose = require('mongoose');
var stock=mongoose.model('stock',{
    company:{type:String},
    number:{type:String},
    type:{type:String},
    Quantity:{type:Number},
});
 module.exports={stock};