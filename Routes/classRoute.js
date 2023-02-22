const express=require("express");
const validateMW=require("./../Core/validations/validateMW");
const classValidator=require("../Core/validations/classValidator");
const controller=require("./../Controller/classContoller");
const router=express.Router();

router.route("/class")
    .get(controller.getAllClasss)
    .post(classValidator.store,validateMW,controller.addClass)
    .patch(classValidator.update,validateMW,controller.updateClass)
    .delete(classValidator.delete,validateMW,controller.deleteClass)

router.get("/class/:id",classValidator.getClass,validateMW,controller.getClass)
router.get("/class/childern/:id",classValidator.getChildern,validateMW,controller.getClassChildern)
router.get("/class/teacher/:id",classValidator.getTeacher,validateMW,controller.getClassTeacher)

module.exports=router;
