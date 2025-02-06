import {User} from "../model/signup.model";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateAccessAndRefreshTokens = async(userId) =>{
    try{
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await User.save({validateBeforeSave : false});
        return{accessToken, refreshToken}
    }catch(err){
        throw new Error (500, "Something wrong while generating refreshToken and accessToken");
    }
}

// Register User
const registerUser = asyncHandler( async(req,res)=>{
    const {name, email, password,confirmPassword} = req.body;
     console.log("email",email)
    if ([name,email,password,confirmPassword].some((field)=>field ?.trim()=== "")){
        throw new Error(400, "All field are required");
    }

    const existedUser = await User.findOne({
        $or: [{email}]
    })
    if (existedUser){
        throw new Error (409, "Email already existed")
    }




})