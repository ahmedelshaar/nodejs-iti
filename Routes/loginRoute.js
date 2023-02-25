const express=require("express");
const loginController=require("../Controller/loginController.js");
const loginValidate = require("../Core/validations/loginValidate.js");

const router=express.Router();

router.route("/login")
    .post(loginValidate.postValidator,loginValidate,loginController.login);

module.exports=router;