const express = require("express");
const router = express.Router();
const authMW = require("../middleware/auth.middleware");
const {
  validateCard,
  Card,
  generateBizNumber,
} = require("../model/card.model");

router.post("/", authMW, async (req, res) => {
  //   validate user's input
  const { error } = validateCard(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // validate system
  if (!req.user.biz) {
    res.status(400).send("User must be of type business to create a card");
  }
  // process
  const card = await new Card({
    ...req.body,
    bizImage:
      req.body.bizImage ??
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    user_id: req.user._id,
    bizNumber: await generateBizNumber(),
  }).save();
  // response
  res.json(card);
});

module.exports = router;
