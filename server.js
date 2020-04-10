const express = require("express");
const mongoose = require("mongoose");

const notes = require("./routes/notes");
const app = express();

app.use(express.json());

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database connection established successfully!");
});

//mongoose.set("useFindAndModify", false);

// Use Routes
app.use("/notes", notes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
