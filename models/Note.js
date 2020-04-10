const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Note = mongoose.model("note", NoteSchema);
