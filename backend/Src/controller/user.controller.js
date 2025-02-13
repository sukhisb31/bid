import {User} from "../model/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// const express = require("express");
const generateAccessAndRefreshTokens = async(userId) =>{
    try{
        const user = await user.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false});
        return{accessToken, refreshToken}
    }catch(err){
        throw new Error (500, "Something wrong while generating refreshToken and accessToken");
    }
}

// Register User (if user not existed create our profile and username )
const registerUser = async(req,res)=>{
   const {name, email, password, confirmPassword} = req.body;
   try{
    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({message:"All field are required"});
    }
    const existedUser = await User.findOne({email});
    if(existedUser){
        return res.status(400).json({message: "This email already exist"});
    }
    if(password !== confirmPassword ){
        return res.status(400).json({message:"password do not matched"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);

    const user  = await User.create({
        name,
        email,
        password: hashPassword,
    });
    res.status(201).json({
        id: user._id,
        userName: user.name,
        email: user.email
    })

   }catch(err){
    res.status (500).json({message:err.message});
   }
}

// Login Controller (check user email or username existed or not )

const loginUser = async(req,res)=>{
    const {email, password} = req.body;
    try{
        if(!email || !password){
            return res.send(400).json({message:"All field are required"});
        }
        const user = await User.findOne({email})
        if(!user){
            return res.send(400).json({message:"User do not exist"});
        }
        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.send(400).json({message:"inValid password"});
        }
        res.cookie("jwt", token, {
            httpOnly: false,
            expires: new Date(Date.now()+24*60*60*1000 ),
            secure: true,
            sameSite : "none",
        });
        res.status(200).json({
            id: user._id,
            email : user.email,
            username : user.name
        });

    }catch(err){
        res.status(500).json({message:err.message});
    }
} ;

// check Profile user is exist or not
const getProfile = async(req, res) =>{
    try{
       const token = req.headers.authorization.split(" ")[1];
       const decoded = jwt.decode(token, process.env.JWT_SECRET);

       if(!decoded){
        return res.status(401).json({message:"inValid token"});
       }
// extract id
       const {id} = decoded;

       // fetch user detail
       const user = await user.findById(id);
       if (!user){
        return res.status(404).json({message:"user not Found"});
       }

        // res with user Data
        res.status(200).json({
            id : user._id,
            username : user.name,
            email : user.email
        });

    }catch(err){
        res.status(500).json({message:err.message});
    }
}

// check Profile user is exist or not


//Logout User
const logoutUser = async(req,res) =>{
    try{
        res.cookies("jwt", "", {
            httpOnly : false,
            secure : true,
            sameTime :" none",
            expires : new Date(0)
        })
        res.status(200).json({message:"User Logout Successfully"});

    }catch(err){
        res.send(500).json({message: err.message})
    }
}

//Logout User


// export all modules 
export default  {
    generateAccessAndRefreshTokens,
    registerUser,
    loginUser,
    getProfile,
    logoutUser
}