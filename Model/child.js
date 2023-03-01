const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
},{ _id: false });

schema.plugin(AutoIncrement,{
    id: 'child_model_id_counter',
    inc_field: "_id"
});

mongoose.model("child", schema);