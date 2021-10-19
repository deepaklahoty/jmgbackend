const  mongoose  = require('mongoose');
const DB = "mongodb+srv://dbStock:Deepak123%40@stock.btmro.mongodb.net/jmgstock?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
    useUnifiedTopology:false
}).then(()=>{console.log("connection ok");}
).catch((err)=>console.log("not ok"));