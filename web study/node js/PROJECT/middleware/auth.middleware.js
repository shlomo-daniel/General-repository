const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).send("Access denaied. no token provided");
    return;
  }

  try {
    const payload = jwt.verify(token, config.jwtKey);
    req.user = payload;
    next();
  } catch {
    res.status(400).send("Invalid token");
  }
};
