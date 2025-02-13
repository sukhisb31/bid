const jwt = require("jsonwebtoken");
const user = require("../model/signup.model");

const authMiddleware = async (req, res, next) => {
  const token = req.rawHeaders
    .find((header) => header.includes("jwt="))
    .split("; ")
    .find((row) => row.startWith("jwt="))
    ?.split("=")[1];
};
    if(!token){
        return res.status(401).json({message:"No token, Authorization denied"});
    }

    // verify user is existed or not
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await user.findById(decoded.id).select("-password");
        next();
    }catch(err){
        res.status(401).json({message:err.message});
    }
    
    export default  authMiddleware;