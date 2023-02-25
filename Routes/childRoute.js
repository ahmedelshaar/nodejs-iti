const express=require("express");
const validateMW=require("./../Core/validations/validateMW");
const childValidator=require("../Core/validations/childValidator");
const controller=require("./../Controller/childController");
const Auth = require("../Middleware/auth");

const router=express.Router();

router.route("/child")
    .all(Auth, Auth.checkAdmin)
    .get(controller.getAllChilderns)
    .post(childValidator.store,validateMW,controller.addChild)
    .patch(childValidator.update,validateMW,controller.updateChild)
    .delete(childValidator.delete,validateMW, controller.deleteChild)

router.get('/child/:id', Auth, Auth.checkAdmin, childValidator.child,validateMW,controller.getChildern)


module.exports=router;