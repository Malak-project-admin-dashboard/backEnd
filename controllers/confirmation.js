const confirmation = require("../models/confirmation");
const Confirmation = require("../models/confirmation");

exports.addConfirmation = (req, res, next) => {
  const data = req.body;

  const myConfirmation = new Confirmation({
    foodName: data.foodName,
    foodDesc: data.foodDesc,
    foodUrl: data.foodUrl,
    name: data.name,
    phone: data.phone,
    quantity: data.quantity,
    price: data.price,
    Acceptance: false,
  });

  myConfirmation.save().catch((err) => console.log(err));
  res.json("create a new conformation successfully");
};




exports.getAllFalseConfirmations = (req, res, next) => {
  Confirmation.find({Acceptance: false})
  .then((Confirmations) => {
    res.status(200).json(Confirmations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}
exports.getAllTrueConfirmations = (req, res, next) => {
  Confirmation.find({Acceptance: true})
  .then((Confirmations) => {
    res.status(200).json(Confirmations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}


exports.changeToTrue = (req, res, next) => {
  const confirmationId = req.body.id;
  Confirmation.findOneAndUpdate(
    { _id: confirmationId, Acceptance: false }, 
    { Acceptance: true }, 
    { new: true }
  )
  .then((updatedConfirmation) => {
    if (updatedConfirmation) {
      res.status(200).json(updatedConfirmation);
    } else {
      res.status(404).json({ message: "Confirmation not found" });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
}



exports.deleteConfirmation = (req, res, next) => {
  const confirmationId = req.params.id;
  Confirmation.findOneAndDelete({ _id: confirmationId })
    .then(() => {
      res.status(200).json({ message: "Confirmation deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};