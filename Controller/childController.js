const mongoose = require("mongoose");
require("./../Model/child");
const childSchema=mongoose.model("child");

exports.getAllChilderns=(request,response,next)=>{
  childSchema
  .find()
  .then((result) =>{
    response.status(200).json(result);
  })
  .catch((error) => next(error));
}

exports.addChild=(request,response,next)=>{
  new childSchema({
    _id: request.body.id,
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
  .then((result) => {
    response.status(201).json(result);
  })
  .catch((error) => next(error));
}

exports.deleteChild=(request,response,next)=>{
  childSchema
  .deleteOne({_id: request.body.id})
  .then((result) => {
    if(result.deletedCount != 0){
      response.status(200).json({
        "data": "deleted"
      });
    }else{
      response.status(404).json({
        "data": "Not Found"
      });
    }
  })
  .catch((error) => next(error));
}

exports.getChildern=(request,response,next)=>{
  childSchema
  .findOne({_id: request.params.id})
  .then((result) =>{
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