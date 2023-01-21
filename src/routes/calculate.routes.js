const express = require("express");
const Router = express.Router();
const calculate = require("../utils/calculate");
const auth = require("../middlewares/auth.middleware");
Router.post("/", auth, (req, res) => {
  let { amount, interest, years } = req.body;
  let { maturity, totalInterest } = calculate(+amount, +interest, +years);
  res.send({ maturity: maturity, totalInterest: totalInterest });
});

module.exports = Router;
