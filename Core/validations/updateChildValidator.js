const {body}=require("express-validator");

module.exports = [
  body("_id").isInt().withMessage("Id Shoud be Number"),
  body("fullname").optional().isString().withMessage("Full Name must be string"),
  body("age").optional().isInt({min: 6, max: 20}).withMessage("age range must be between 6 & 20"),
  body("level").optional().isIn(["PreKG","KG1","KG2"]).withMessage("Value not Matched"),
  body("address").optional().isObject().withMessage("address Must be object"),
  body("address.city").optional().isString().withMessage("city Must be String"),
  body("address.street").optional().isAlphanumeric().withMessage("street Must be Alpha and numeric"),
  body("address.building").optional().isInt({min: 1}).withMessage("building Must be number"),
];