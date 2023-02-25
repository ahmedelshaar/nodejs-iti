const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const teacherSchema = mongoose.model("teacher");

exports.login = (request, response, next) => {
  teacherSchema.findOne({email:request.body.email})
  .then(teacher=>{
    if(teacher == null) throw new Error("Not Found");
    let result = bcrypt.compareSync(request.body.password, teacher.password)
    if (!result) throw new Error("Wrong email or password");
    else {
        if(teacher._id == "63f4f08aed5a457ede24f7b8"){
          request.role="admin";
        }
        else{
          request.role="teacher";
        }
        let token = jwt.sign({id:teacher._id, role:request.role}, process.env.SECRET_KEY, {expiresIn: "24h"});
        response.status(200).json({token:token,"message":"Authorized"});
    }
  })
  .catch(error=>{
      error.status=401;
      next(error);
  });
}