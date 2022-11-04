const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
