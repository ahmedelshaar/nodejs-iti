const express=require("express");
const validateMW=require("./../Core/validations/validateMW");
const classValidator=require("../Core/validations/classValidator");
const controller=require("./../Controller/classContoller");
const Auth = require("../Middleware/auth");
const router=express.Router();

router.route("/class")
    .all(Auth, Auth.checkAdmin)
    .get(controller.getAllClasss)
    .post(classValidator.store,validateMW,controller.addClass)
    .patch(classValidator.update,validateMW,controller.updateClass)
    .delete(classValidator.delete,validateMW,controller.deleteClass)

router
    .all(Auth, Auth.checkAdmin)
    .get("/class/:id", classValidator.getClass,validateMW,controller.getClass)
    .get("/class/childern/:id", classValidator.getChildern,validateMW,controller.getClassChildern)
    .get("/class/teacher/:id", classValidator.getTeacher,validateMW,controller.getClassTeacher)

module.exports=router;
