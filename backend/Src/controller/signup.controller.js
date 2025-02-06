import {User} from "../model/signup.model";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
const registerUser = async async(req,res)=>{
   const {userName, email, password, confirmPassword} = req.body;
   try{
    if(!userName || !email || !password || !confirmPassword){
        return res.status(400).json({message:"All field are required"});
    }
    const existedUser = await User.findOne({email});
    if(userExist){
        return res.status(400).json({message: "This email already exist"});
    }
    if(password !== confirmPassword ){
        return res.send(400).json({message:"password do not matched"});
    }
    const pass = await bcrypt.genPass(10);
    const hashPassword = await bcrypt.hash(password,pass);

    const user  = await User.create({
        userName,
        email,
        password: hashPassword,
    });
    res.status(201).json({
        id: user._id,
        userName: user.userName,
        email: user.email
    })

   }catch(err){
    res.status (500).json({message:err.message});
   }
}

