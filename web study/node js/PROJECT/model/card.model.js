const Joi = require("joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const cardSchema = new mongoose.Schema({
  bizName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  bizDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 500,
  },
  bizAddress: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  bizPhone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 10,
  },
  bizImage: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 500,
  },
  bizNumber: {
    type: Number,
    required: true,
    min: 100,
    max: 3_999_999_999,
    unique: true,
  },
});

const Card = mongoose.model("Card", cardSchema, "cards");

function validateCard(card) {
  const schema = Joi.object({
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string().min(9).max(10).required(),
    bizImage: Joi.string().min(11).max(1024),
  });
  return schema.validate(card);
}

async function generateBizNumber() {
  while (true) {
    const random = _.random(100, 9_999_999_999);
    const card = await Card.find({ bizNumber: random });

    if (!card) {
      return random;
    }
  }
}

module.exports = { Card, validateCard, generateBizNumber };
