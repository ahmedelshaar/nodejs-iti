const express = require("express");
const multer = require("multer");
const path = require("path");
const validateMW=require("./../Core/validations/validateMW");
const teacherValidator=require("../Core/validations/teacherValidator");
const controller = require("../Controller/teacherContoller");
const Auth = require("../Middleware/auth");

const upload = multer({ 
    fileFilter: (request, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error("file should be Image only."));
        }
    } ,
    storage: multer.diskStorage({
        destination:(request, file, cb) => {
            cb(null, path.join(__dirname,"..","images","teacher"));
        },
        filename: (request, file, cb) => {
            let ext = path.extname(file.originalname);
            let fileName = path.basename(file.originalname,ext);
            let finalName =  file.fieldname + '-' + fileName + '-' + Date.now() + ext
            cb(null,finalName);
        }
    }),
});


const setImage = (request,response,next)=>{
    if (request.file && request.file.path)
        request.body.image = request.file.path;
    next();
}


const router = express.Router();

router.route("/teachers")
    .all(Auth, Auth.checkAdminOrTeacher)
    .get(controller.getAllTeachers)
    .post(upload.single('image'),setImage,teacherValidator.store,validateMW,controller.addTeacher)
    .patch(upload.single('image'),setImage,teacherValidator.update,validateMW,controller.updateTeacher)
    .delete(teacherValidator.delete,validateMW,controller.deleteTeacher)

module.exports=router;
