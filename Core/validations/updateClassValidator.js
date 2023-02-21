const {body}=require("express-validator");

module.exports = [
  body("_id").isInt().withMessage("Id Shoud be Number"),
  body("name").optional().isString().withMessage("Name must be string"),
  body("supervisor").optional().isMongoId().withMessage("supervisor must be object id"),
  body("children").optional().isArray().withMessage("children must be array of ids"),
  body("children.*").optional().isNumeric().withMessage("children must be array of ids"),
];