const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    creator: {
      type: String,
      required: true,
    },
    duration: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);
