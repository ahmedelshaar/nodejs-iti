const express=require("express");
const {param}=require("express-validator");
const validateMW=require("./../Core/validations/validateMW");
const storeClassValidator=require("./../Core/validations/storeClassValidator");
const updateClassValidator=require("./../Core/validations/updateClassValidator");
const controller=require("./../Controller/classContoller");
const router=express.Router();

router.route("/class")
    .get(controller.getAllClasss)
    .post(storeClassValidator,validateMW,controller.addClass)
    .patch(updateClassValidator,validateMW,controller.updateClass)
    .delete([param("id").isInt().withMessage("Id Shoud be Number"), validateMW],controller.deleteClass)

router.get("/class/:id", [param("id").isInt().withMessage("Id Shoud be Number"), validateMW],controller.getClass)
router.get("/class/childern/:id", [param("id").isInt().withMessage("Id Shoud be Number"), validateMW],controller.getClassChildern)
router.get("/class/teacher/:id", [param("id").isMongoId().withMessage("Id Shoud Mongo Id"), validateMW],controller.getClassTeacher)

module.exports=router;
