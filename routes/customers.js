const router = require("express").Router();
let Customer = require("../models/customer");

router.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/addNewCustomer").post((req, res) => {
  const { rooms } = req.body;
  const {
    customerName,
    email,
    phoneNumber,
    govtidentityProof,
  } = req.body.customer;

  const newCustomer = new Customer({
    customerName,
    email,
    phoneNumber,
    govtidentityProof,
    rooms,
  });

  newCustomer
    .save()
    .then(() => res.json("Customer added sucessfully to DB!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
