const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "teacher"
  },
  children: [{
      type: Number,
      require: true,
      ref: "child"
  }],
},{ _id: false });

schema.plugin(AutoIncrement,{
    id: 'class_model_id_counter',
    inc_field: "_id"
});
mongoose.model("class", schema);