const express = require("express");
const router = express.Router();
const adminControler = require("../controllers/confirmation");



router.post("/adminConfirmation", adminControler.addConfirmation);
router.get("/getAllFalseConfirmations", adminControler.getAllFalseConfirmations);
router.get("/getAllTrueConfirmations", adminControler.getAllTrueConfirmations);
router.get("/getAllTrueConfirmationsCard/:id", adminControler.getAllTrueConfirmationsCard);
router.get("/getConfirmation/:id", adminControler.getConfirmation);
router.delete("/deleteConfirmation/:id", adminControler.deleteConfirmation);
router.post("/changeToTrue", adminControler.changeToTrue);
router.put("/Recipes/:id",adminControler.updateRecipes);
router.delete("/deleteRecipes/:id", adminControler.deleteRecipes);
module.exports = router;

