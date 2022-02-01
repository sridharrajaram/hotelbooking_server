const roomRouter = require("express").Router();
let Rooms = require("../models/room");

roomRouter.route("/").get((req, res) => {
  Rooms.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Returns Room by id
roomRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  Rooms.findById(id)
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//addind a new room to list
roomRouter.route("/addNewRoom").post((req, res) => {
  const {
    roomtype,
    rooms,
    beds,
    utilitise,
    price,
    image,
    description,
  } = req.body;

  const newRoom = new Rooms({
    roomtype,
    rooms,
    beds,
    utilitise,
    price,
    image,
    description,
  });

  newRoom
    .save()
    .then(() => res.json("Room added sucessfully!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = roomRouter;
