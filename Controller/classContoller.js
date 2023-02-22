const mongoose = require("mongoose");
require("./../Model/class");
const classSchema = mongoose.model("class");

exports.getAllClasss=(request,response,next)=>{
  classSchema
  .find()
  .then((result) => {
    response.status(200).json(result);
  })
  .catch((error) => next(error));
}

exports.getClass=(request,response)=>{
  classSchema
  .findById(request.params.id)
  .then((result) => {
    if(result == null){
      response.status(404).json({
        "data": "Not Found"
      });
    }else{
      response.status(200).json(result);
    }
  })
  .catch((error) => next(error));
}

exports.addClass=(request,response,next)=>{
  new classSchema({
    _id: request.body.id,
    name: request.body.name,
    supervisor: request.body.supervisor,
    children: request.body.children,
  })
  .save()
  .then((result) => {
    response.status(201).json(result);
  })
  .catch((error) => next(error));
}

exports.updateClass=(request,response)=>{
  classSchema
  .updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: {
        name: request.body.name,
        supervisor: request.body.supervisor,
        childs: request.body.childs,
      },
    }
  )
  .then((result) => {
    response.status(200).json(result);
  })
  .catch((error) => next(error));
}

exports.deleteClass=(request,response)=>{
  response.status(200).json({data:"Delete Class"});
}



exports.getClassChildern=(request,response)=>{
  classSchema.find({_id:req.params.id},{child:1})
  .populate({path:"child",select:{name:1}})
  .then(data=>{
      if(data == null) throw new Error("this class not exist");
      else{
        response.status(200).json({data})
      }
  })
  .catch(error=>next(error))
}

exports.getClassTeacher=(request,response)=>{
  classSchema.findOne({_id:req.params._id},{supervisor:1})
  .populate({path:"supervisor",select:{name:1}})
  .then(data=>{
      if(data == null) throw new Error("this class not exist");
      else res.status(200).json({data});
  })
  .catch(error=>next(error))
}