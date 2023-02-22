const express = require("express");
const validateMW=require("./../Core/validations/validateMW");
const teacherValidator=require("../Core/validations/teacherValidator");
const controller = require("../Controller/teacherContoller");
const router = express.Router();

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(teacherValidator.store,validateMW,controller.addTeacher)
    .patch(teacherValidator.update,validateMW,controller.updateTeacher)
    .delete(teacherValidator.delete,validateMW,controller.deleteTeacher)

module.exports=router;
