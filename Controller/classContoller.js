
exports.getAllClasss=(request,response)=>{
  response.status(200).json({data:"All Class"});
}

exports.getClass= (request,response)=>{
  response.status(200).json({data:"Get Class " + request.params.id});
}

exports.addClass=(request,response,next)=>{

  response.status(201).json({data:"add Class"});
}

exports.updateClass=(request,response)=>{
  response.status(200).json({data:"Update Class"});
}
exports.deleteClass=(request,response)=>{
  response.status(200).json({data:"Delete Class"});
}

exports.getClassChildern=(request,response)=>{
  response.status(200).json({data:"Class Childern " + request.params.id});
}

exports.getClassTeacher=(request,response)=>{
  response.status(200).json({data:"Class Teacher " + request.params.id});
}