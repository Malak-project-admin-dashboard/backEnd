const express = require("express");
const router = express.Router();
const adminControler = require("../controllers/food");



router.post("/adminFood", adminControler.addFood);
router.get('/getAllFoods',adminControler.getAllFoods)
module.exports = router;