const {body}=require("express-validator");

module.exports = [
  body("_id").isInt().withMessage("Id Shoud be Number"),
  body("name").isString().withMessage("Name must be string"),
  body("supervisor").isMongoId().withMessage("supervisor must be object id"),
  body("children").isArray().withMessage("children must be array of ids"),
  body("children.*").optional().isNumeric().withMessage("children must be array of ids"),
];