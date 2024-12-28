const path = require("node:path");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const favorite = [];

app.get(["/", "/home"], (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "./public/HOME.html"));
});

app.get("/about", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "./public/about.html"));
});

app.get("/contactUs", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "./public/contactUs.html"));
});

// favorite

// 404
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "./public/404.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
