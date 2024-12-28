const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../model/users.schema");
const Joi = require("joi");
const router = express.Router();
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, async (req, res) => {
  // validate user input
  const { error } = validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // validate system
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).send("Invalid email");
    return;
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    res.status(400).send("Invalid password");
    return;
  }
  // process
  const token = jwt.sign({ _id: user._id, biz: user.biz }, config.jwtKey);
  // response
  res.json({ token });
  // res.send("ok");
});

function validate(obj) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(obj);
}

module.exports = router;
