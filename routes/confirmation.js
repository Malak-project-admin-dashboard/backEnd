const express = require("express");
const router = express.Router();
const adminControler = require("../controllers/confirmation");



router.post("/adminConfirmation", adminControler.addConfirmation);
router.get("/getAllFalseConfirmations", adminControler.getAllFalseConfirmations);
router.get("/getAllTrueConfirmations", adminControler.getAllTrueConfirmations);
router.delete("/deleteConfirmation/:id", adminControler.deleteConfirmation);
router.post("/changeToTrue", adminControler.changeToTrue);
module.exports = router;