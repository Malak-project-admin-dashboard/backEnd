const Food = require("../models/food");

exports.addFood = (req, res, next) => {
  const data = req.body;
  const myNewFood = new Food({
    foodName: data.foodName,
    foodDesc: data.foodDesc,
    foodUrl: data.foodUrl,
  });
  myNewFood.save().catch((err) => console.log(err));
  res.json("create a new food successfully");
};





exports.getAllFoods = (req, res, next) => {
    Food.find({})
      .then(food => {
        res.status(200).json(food);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };
