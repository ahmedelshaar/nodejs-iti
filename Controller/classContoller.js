const mongoose = require("mongoose");
require("./../Model/class");
require("./../Model/teacher");
require("./../Model/child");
const classSchema = mongoose.model("class");
const teacherSchema = mongoose.model("teacher");
const childSchema = mongoose.model("child");

exports.getAllClasss=(request,response,next)=>{
  classSchema
  .find()
  .then((data) => {
    response.status(200).json(data);
  })
  .catch((error) => next(error));
}

exports.getClass=(request,response)=>{
  classSchema
  .findById(request.params.id)
  .then((data) => {
    if(data == null){
      throw new Error("Not Found")
    }else{
      response.status(200).json(data);
    }
  })
  .catch((error) => next(error));
}

exports.addClass=(request,response,next)=>{
  let childerns = Array.from(new Set(request.body.children));
  teacherSchema.findOne({_id:request.body.supervisor},{_id:1})
  .then(data => {
    if(data==null){
      throw new Error("Teacher not Found");
    }else{
      return childSchema.find({_id:{$in:childerns}},{_id:1})
    }
  }).then(data => {
    if(data.length != childerns.length){
      throw Error("Childern not Found");
    }else{
      return new classSchema({
        name: request.body.name,
        supervisor: request.body.supervisor,
        children: childerns,
      })
      .save()
    }
  })
  .then((data) => {
    response.status(201).json(data);
  })
  .catch((error) => next(error));
}

exports.updateClass=(request,response,next)=>{
  let childerns = Array.from(new Set(request.body.children));
  teacherSchema.findOne({_id:request.body.supervisor},{_id:1})
  .then(data => {
    if(data==null && request.body.supervisor != undefined){
      throw new Error("Teacher not Found");
    }else{
      return childSchema.find({_id:{$in:childerns}},{_id:1})
    }
  }).then(data => {
    if(data.length != childerns.length){
      throw Error("Childern not Found");
    }else{
      return classSchema
      .updateOne(
        {
          _id: request.body.id,
        },
        {
          $set: {
            name: request.body.name,
            supervisor: request.body.supervisor,
            children: childerns,
          },
        }
      )
    }
  })
  .then((data) => {
    if(data.matchedCount == 0){
      throw new Error("Not Found")
    }else{
      response.status(200).json(data);
    }
  })
  .catch((error) => next(error));
}

exports.deleteClass=(request,response,next)=>{
  classSchema.deleteOne({_id:request.body.id})
  .then(data=>{
    if(data.deletedCount == 0){
      throw new Error("Not Found")
    }else{
      response.status(200).json(data);
    }
  })
  .catch(error=>next(error))
}


exports.getClassChildern=(request,response,next)=>{
  classSchema.find({_id:request.params.id},{children:1})
  .populate({path:"children",select:{name:1}})
  .then(data=>{
    if(data == null){
      throw new Error("Not Found")
    }else{
      response.status(200).json({data})
    }
  })
  .catch(error=>next(error))
}

exports.getClassTeacher=(request,response,next)=>{
  classSchema.findOne({_id:request.params.id},{supervisor:1})
  .populate({path:"supervisor",select:{name:1}})
  .then(data=>{
      if(data == null){
        throw new Error("Not Found")
      }else{
        response.status(200).json({data})
      }
  })
  .catch(error=>next(error))
}