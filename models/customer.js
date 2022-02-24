const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 10,
    },
    govtidentityProof: {
      type: Number,
      required: true,
      minlength: 15,
    },
    rooms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Rooms",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
