const Confirmation = require('../models/confirmation');


// const User = require("C:\\Users\\user\\Desktop\\wheat-main\\BackEnd\\models\\user.js");



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
   // idUser: user._id,
  //  userId: req.user._id, // use the correct property for the user ID

    Acceptance: false,
  });

  myConfirmation.save()
    .then(() => res.json('created a new confirmation successfully'))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};


exports.getAllTrueConfirmationsCard = (req, res, next) => {
  const userId = mongoose.Types.ObjectId(req.params.id); // convert the id to a mongoose ObjectId 

  Confirmation.find({Acceptance: true})
  .then((Confirmations) => {
    console.log(Confirmations);
    res.status(200).json(Confirmations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}



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