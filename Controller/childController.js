const mongoose = require("mongoose");
require("./../Model/child");
const childSchema=mongoose.model("child");

exports.getAllChilderns=(request,response,next)=>{
  childSchema
  .find()
  .then((data) =>{
    response.status(200).json(data);
  })
  .catch((error) => next(error));
}

exports.addChild=(request,response,next)=>{
  new childSchema({
    name: request.body.name,
    age: request.body.age,
    level: request.body.level,
    address:{
        city: request.body.address.city,
        street: request.body.address.street,
        building: request.body.address.building,
    }
  }).save()
  .then(data=>{
    response.status(201).json({data});
  })
  .catch(error => next(error))
}

exports.updateChild=(request,response,next)=>{
  childSchema
  .updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: {
        name: request.body.name,
        age: request.body.age,
        level: request.body.level,
        address: request.body.address,
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
  .catch((error) => next(error));
}

exports.deleteChild=(request,response,next)=>{
  childSchema
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

exports.getChildern=(request,response,next)=>{
  childSchema
  .findOne({_id: request.params.id})
  .then((data) =>{
    if(data == null){
      throw new Error("Not Found")
    }else{
      response.status(200).json(data);
    }
  })
  .catch((error) => next(error));
}