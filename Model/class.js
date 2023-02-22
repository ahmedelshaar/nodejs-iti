const mongoose = require("mongoose");
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
});

mongoose.model("class", schema);