// routes/notes.js

const express = require("express");
const router = express.Router();

// Load Note model
const Note = require("../models/Note");

// @route GET /notes
// @description Get all notes
// @access Public
router.get("/", (req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(404).json({ nonotesfound: "No Notes found" }));
});

// @route GET notes/:id
// @description Get single note by id
// @access Public
router.get("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(404).json({ nonotefound: "No Note found" }));
});

// @route GET /notes
// @description add note
// @access Public
router.post("/", (req, res) => {
  Note.create(req.body)
    .then((note) => res.json({ msg: "Note added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this note" }));
});

// @route GET notes/:id
// @description Update note
// @access Public
router.put("/:id", (req, res) => {
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then((note) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ err: "Unable to update the Database" })
    );
});

// @route DELETE note/:id
// @description Delete note by id
// @access Public
router.delete("/:id", (req, res) => {
  Note.findByIdAndRemove(req.params.id, req.body)
    .then((note) => res.json({ mgs: "Note  deleted successfully" }))
    .catch((err) => res.status(404).json({ err: "No such a note" }));
});

module.exports = router;
