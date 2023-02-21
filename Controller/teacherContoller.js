exports.getAllTeachers=(request,response)=>{
  response.status(200).json({data: "Get Teachers"});
}

exports.addTeacher=(request,response,next)=>{
  response.status(201).json({data:"Add Teacher"});
}

exports.updateTeacher=(request,response)=>{
  response.status(200).json({data:"Update Teacher"});
}
exports.deleteTeacher=(request,response)=>{
  response.status(200).json({data:"Delete Teacher"});
}