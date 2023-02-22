const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  age: { type: Number, min: 8, max: 20 },
  level: { type: String, enum: ["PreKG", "KG1", "KG2"] },
  address: {
    city: String,
    street: String,
    building: Number,
  },
});

mongoose.model("child", schema);