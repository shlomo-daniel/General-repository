const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");
const morgan = require("morgan");
// end initilazations

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.send("hello to you my friend 00");
});

// listen to port
app.listen(PORT, console.log(`listenging to port ${PORT}`));
