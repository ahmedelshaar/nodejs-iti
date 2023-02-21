const express=require("express");
const {param}=require("express-validator");
const validateMW=require("./../Core/validations/validateMW");
const storeChildValidator=require("./../Core/validations/storeChildValidator");
const updateChildValidator=require("./../Core/validations/updateChildValidator");
const controller=require("./../Controller/childController");
const router=express.Router();

router.route("/child")
    .get(controller.getAllChilderns)
    .post(storeChildValidator,validateMW,controller.addChild)
    .patch(updateChildValidator,validateMW,controller.updateChild)
    .delete(updateChildValidator,validateMW, controller.deleteChild)

router.get('/child/:id', [param("id").isInt().withMessage("Id Shoud be Number"), validateMW] ,controller.getChildern)


module.exports=router;