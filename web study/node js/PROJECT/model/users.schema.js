const mongoose = require("mongoose");
const joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlenght: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 6,
    maxlength: 1024,
  },
  biz: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema, "users");

function validateUser(user) {
  const schema = joi.object({
    name: joi.string().min(2).max(255).required(),
    email: joi.string().min(6).max(255).email().required(),
    password: joi.string().min(6).max(1024).required(),
    biz: joi.boolean().required(),
  });
  return schema.validate(user);
}

module.exports = { User, validateUser };
