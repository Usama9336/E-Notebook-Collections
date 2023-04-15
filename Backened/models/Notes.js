const mongoose = require('mongoose');
const {Schema}=mongoose;
 const NotesSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    desciption:{
        type:String,
        required:true,
        unique:true
    },
    tag:{
        type:String,
        required:'General'
    },
     date:{
        type:Date,
        default:Date.now
     },
});
const User=mongoose.model('user',NotesSchema);
//User.createIndexes();
module.exports=User;