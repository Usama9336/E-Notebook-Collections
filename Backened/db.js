const mongoose=require('mongoose');
const mongoURI="mongodb+srv://Usama9336:Amasu9336%40@cluster0.y6citjq.mongodb.net/test?retryWrites=true&w=majority";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongoose successfully");
    })
}
module.exports=connectToMongo;