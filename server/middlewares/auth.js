import ErrorHandler from "../utils/errorHandler.js";




export const isAuthenticated=(req,res,next)=>{
    const token=req.cookies["connect.sid"];
    if(!token){
        return next(new ErrorHandler("Not logged in!",401));
    }
    next();
}


export const authorizeAdmin=(req,res,next)=>{
    if(req.user.role!=="admin"){
        return next(new ErrorHandler("Only admin allowed",500));

    }
    next();

}