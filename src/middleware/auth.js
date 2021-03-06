const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const auth = async (req, res, next) => {
  try {
    console.log("header", req.header);
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("TOKEN", token, process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
