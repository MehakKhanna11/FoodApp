import express from "express";
import passport from "passport";
import { getAdminStats, getAdminUsers, logout, myProfile } from "../controllers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);


router.get("/login",passport.authenticate("google",{
  successRedirect:process.env,FRONTEND_URL,
}),(req,res,next)=>{
  res.send("Login successful!");}
);
router.get("/me",isAuthenticated,myProfile);
router.get("/logout",logout);


router.get("/admin/stats",isAuthenticated,authorizeAdmin,getAdminStats)


//admin routes
router.get("/admin/users",isAuthenticated,authorizeAdmin,getAdminUsers)
export default router;
