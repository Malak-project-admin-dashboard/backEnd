const express = require("express");
const router = express.Router();
const adminControler = require("../controllers/Payment");



router.post("/adminPayment", adminControler.addPayment);
router.get("/getAllPayment", adminControler.getAllPayment);
module.exports = router;