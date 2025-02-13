
const myRouter= (router) =>{


const {
    generateAccessAndRefreshTokens,
    registerUser,
    loginUser,
    getProfile,
    logoutUser,
} = require ("../controller/signup.controller");

// const router =Router();
const {authMiddleWare} = require("../middleware/authMiddleware");

// Routing 

router.post ("/register",authMiddleWare, registerUser);
router.post("/login",authMiddleWare, loginUser);
router.get("/profile", getProfile);
router.post("/logout", logoutUser);
router.post("/token", generateAccessAndRefreshTokens);
// app.use("/api/user", router);
return router;
}

export default myRouter;