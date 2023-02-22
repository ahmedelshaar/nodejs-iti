const express=require("express");
const validateMW=require("./../Core/validations/validateMW");
const childValidator=require("../Core/validations/childValidator");
const controller=require("./../Controller/childController");
const router=express.Router();

router.route("/child")
    .get(controller.getAllChilderns)
    .post(childValidator.store,validateMW,controller.addChild)
    .patch(childValidator.update,validateMW,controller.updateChild)
    .delete(childValidator.delete,validateMW, controller.deleteChild)

router.get('/child/:id',childValidator.child,validateMW,controller.getChildern)


module.exports=router;