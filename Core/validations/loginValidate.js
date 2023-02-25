const {body,validationResult}=require("express-validator");

module.exports= (request,response,next)=>{
  let result= validationResult(request);
  if(result.errors.length != 0)
  {
    let error=new Error("Email & password not Matched");
    error.status=401; 
    next(error);
  }
  else{
    next();
  }
}
module.exports.postValidator = [
  body("password").isLength({min: 8}).withMessage("Password Required & Min Length 8"),
  body("email").isEmail().withMessage("Email Required")
];