const {body}=require("express-validator");

exports.store = [
  body("name").isString().withMessage("Full Name must be string"),
  body("password").isLength({min: 8}).withMessage("Password Must be Min length 8"),
  body("email").isEmail().withMessage("Email Invalid Format"),
  body("image").isString().withMessage("image Invalid Must be String"),
];

exports.update = [
  body("id").isMongoId().withMessage("Id Shoud be Object"),
  body("name").optional().isString().withMessage("Full Name must be string"),
  body("password").optional().isLength({min: 8}).withMessage("Password Must be Min length 8"),
  body("email").optional().isEmail().withMessage("Email Invalid Format"),
  body("image").optional().isString().withMessage("image Invalid Must be String"),
];

exports.delete = [
  body("id").isMongoId().withMessage("Id Shoud be Object"),
]