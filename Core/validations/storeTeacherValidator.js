const {body}=require("express-validator");

module.exports = [
  body("_id").isMongoId().withMessage("Id Shoud be Object"),
  body("fullname").isString().withMessage("Full Name must be string"),
  body("password").isLength({min: 8}).withMessage("Password Must be Min length 8"),
  body("email").isEmail().withMessage("Email Invalid Format"),
  body("image").isString().withMessage("image Invalid Must be String"),
];