const {body}=require("express-validator");

module.exports = [
  body("_id").isInt().withMessage("Id Shoud be Number"),
  body("fullname").isString().withMessage("Full Name must be string"),
  body("age").isInt({min: 6, max: 20}).withMessage("age range must be between 6 & 20"),
  body("level").isIn(["PreKG","KG1","KG2"]).withMessage("Value not Matched"),
  body("address").isObject().withMessage("address Must be object"),
  body("address.city").isString().withMessage("city Must be String"),
  body("address.street").isAlphanumeric().withMessage("street Must be Alpha and numeric"),
  body("address.building").isInt({min: 1}).withMessage("building Must be number"),
];