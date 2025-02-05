const { body } = require("express-validator");

const addUserValidation = [
  body("name").trim().notEmpty().withMessage("Provide your Name first"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Enter Valid Email")
    .isEmail()
    .withMessage("email Invalid"),
    
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Enter Password")
    .isStrongPassword()
    .withMessage(
      "Password must be Strong at least 6 character or more(include special character, lowerCase, upperCase and Number )"
    ),
    body("confirmPassword").trim().notEmpty().withMessage("Confirm Your Password").custom((value, {req})=>{
        if(value !== req.body.password){
            throw new Error("Password do not match");
        }
        return true;
    })
];
module.exports = addUserValidation;
