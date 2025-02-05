const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to DB");
        
    }catch(err){
        console.log("MongoDb connection failed :", err);
        process.exit(1);
    }
}
connectToDb();

const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Listening Port at : ${PORT}`);
    
});