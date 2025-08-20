const mongoose = require("mongoose");
const User = require('./user.js');
const Listing = require('./listings.js');
const { required, number } = require("joi");

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    listing: {
        type: mongoose.Schema.ObjectId,
        ref: "Listing",
        required: true,
    },

    checkInDate: {
        type: Date,
        required: true,
    },

    checkOutDate: {
        type: Date,
        required: true
    },

    Guest: {
        type: Number,
        required: true,
    },

    price: { 
        type: Number, 
        required: true, 
    },

    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'confirmed',
      index: true,
    },
});

const Booking = new mongoose.model("Booking", BookingSchema);
module.exports = Booking;