require("dotenv/config");
const path = require("node:path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3005;

const authRouter = require("./router/auth");
const usersRouter = require("./router/users");
const cardsRouter = require("./router/cards");
app.use(require("morgan")("dev"));
app.use(express.json());

app.use("/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/cards", cardsRouter);

connect();

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://Dani:learndb777@cluster0.fntrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to db");
    app.listen(PORT, console.log(`listening to port ${PORT}`));
  } catch (e) {
    console.log("failed to connect to db", e.message);
  }
}
