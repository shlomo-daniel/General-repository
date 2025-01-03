const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/my_rest_api_W110929ER")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);

const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));
