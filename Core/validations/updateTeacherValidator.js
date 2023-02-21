const {body}=require("express-validator");

module.exports = [
  body("_id").isMongoId().withMessage("Id Shoud be Object"),
  body("fullname").optional().isString().withMessage("Full Name must be string"),
  body("password").optional().isLength({min: 8}).withMessage("Password Must be Min length 8"),
  body("email").optional().isEmail().withMessage("Email Invalid Format"),
  body("image").optional().isString().withMessage("image Invalid Must be String"),
];