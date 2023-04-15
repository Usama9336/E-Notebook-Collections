const mongoose = require('mongoose');
const {Schema}=mongoose;
 const UserSchema=new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
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
const User=mongoose.model('user',UserSchema);
//User.createIndexes();
module.exports=User;