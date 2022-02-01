const mongoose = require("mongoose");
const RoomTypes = require("../types/room");

const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    roomtype: {
      type: String,
      required: true,
      enum: [
        RoomTypes.DELUX_DOUBLE_ROOM,
        RoomTypes.DELUX_SINGLE_ROOM,
        RoomTypes.LUXURY_SINGLE_ROOM,
        RoomTypes.LUXURY_DOUBLE_ROOM,
      ],
    },
    rooms: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    utilitise: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Rooms = mongoose.model("Rooms", roomSchema);

module.exports = Rooms;
