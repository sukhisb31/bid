const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router =  express.Router();
const cors = require("cors");

// const myRoute = require("./Src/routes/userRoute")
const {myRouter} = require("./Src/routes/userRoute");
dotenv.config();

// Db Server 
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


// server created and connection
const app = express();
app.use(express.json());
app.use(
    cors({
        origin : process.env.FRONTEND_URL,
        methods : ["POST", "GET", "PUT", "DELETE"],
        credentials : true,
    })
)

app.use(router);
// app.use("/api/user",userRoutes(router));
app.use ("/api/user", myRouter)
console.log(myRouter);




const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Listening Port at : ${PORT}`);
    
});