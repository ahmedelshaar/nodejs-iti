exports.getAllChilderns=(request,response)=>{
  response.status(200).json({data:"Get All Childerns"});
}

exports.addChild=(request,response,next)=>{
  response.status(201).json({data:"Add Child"});
}

exports.updateChild=(request,response)=>{
  response.status(200).json({data:"Updade Child"});
}
exports.deleteChild=(request,response)=>{
  response.status(200).json({data:"Delete Child"});
}

exports.getChildern=(request,response)=>{
  response.status(200).json({data:"Get Child " + request.params.id});
}