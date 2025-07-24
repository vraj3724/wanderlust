const mongoose = require("mongoose");
const User = require('./user.js');
const Listing = require('./listings.js');
const { required } = require("joi");

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },

    listing: {
        type: mongoose.Schema.ObjectId,
        ref: "listing",
        required: true,
    },

    checkInDate: {
        type: Date,
        required: true,
    },

    checkOutDate: {
        type: Date,
        required: true
    }
});

const Booking = new mongoose.model("Booking", BookingSchema);
module.exports = Booking;