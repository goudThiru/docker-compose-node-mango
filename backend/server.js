const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from Node.js API running in Docker!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
