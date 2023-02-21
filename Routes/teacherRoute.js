const express = require("express");
const {param}=require("express-validator");
const validateMW=require("./../Core/validations/validateMW");
const storeTeacherValidator=require("./../Core/validations/storeTeacherValidator");
const updateTeacherValidator=require("./../Core/validations/updateTeacherValidator");
const controller = require("../Controller/teacherContoller");
const router = express.Router();

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(storeTeacherValidator,validateMW,controller.addTeacher)
    .patch(updateTeacherValidator,validateMW,controller.updateTeacher)
    .delete(updateTeacherValidator,validateMW,controller.deleteTeacher)

module.exports=router;
