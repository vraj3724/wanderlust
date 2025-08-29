const express = require('express');
const router = express.Router();
const {isLoggedIn, isHost} = require("../middleware.js");
const Booking = require('../models/booking.js');

router.get("/", isLoggedIn , async (req, res) => {
    let booking = await Booking.find({ user: req.user._id }).populate("listing");
    booking = booking.filter(b => b.listing !== null);

    console.log(booking);
    res.render("bookings/mybooking", {booking});
});

router.delete("/:id", async (req,res) => {
    let {id} = req.params;
    let deletedBooking = await Booking.findByIdAndDelete(id);
    console.log(deletedBooking);
    req.flash("success", "Booking Deleted");
    res.redirect("/mybookings");
});

module.exports = router; 