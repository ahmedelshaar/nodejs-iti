const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
require("./../Model/teacher");
const teacherSchema = mongoose.model("teacher");
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds);

exports.getAllTeachers=(request,response)=>{
  teacherSchema
  .find()
  .then((data) => {
    response.status(200).json(data);
  })
  .catch((error) => next(error));
}

exports.addTeacher=(request,response,next)=>{
  new teacherSchema({
    _id: new mongoose.Types.ObjectId(),
    name: request.body.name,
    password: bcrypt.hashSync(request.body.password, salt),
    email: request.body.email,
    image: request.body.image,
  }).save()  
  .then(data=>{
    response.status(201).json({data});
  })
  .catch(error => next(error))
}

exports.updateTeacher=(request,response,next)=>{
  let password;
  if (request.body.password != undefined){
    password = bcrypt.hashSync(request.body.password, salt);
  }
  teacherSchema.updateOne(
    { _id: request.body.id },
    {
      $set: {
        name: request.body.name,
        password: password,
        email: request.body.email,
        image: request.body.image,
      },
    }
  )
  .then((data) => {
    if(data.matchedCount == 0){
      throw new Error("Not Found")
    }else{
      response.status(200).json(data);
    }
  })
  .catch((error) => next(error))
}

exports.deleteTeacher=(request,response)=>{
  teacherSchema
  .deleteOne({_id: request.body.id})
  .then((data) => {
    if(data.deletedCount == 0){
      throw new Error("Not Found")
    }else{
      response.status(200).json(data);
    }
  })
  .catch((error) => next(error));
}