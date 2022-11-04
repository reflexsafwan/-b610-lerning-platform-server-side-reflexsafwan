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

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const coursesDetailsData = coursesDetails.find((cd) => cd.id === id);
  res.send(coursesDetailsData);
  console.log(coursesDetailsData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
