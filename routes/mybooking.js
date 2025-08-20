const express = require('express');
const router = express.Router();
const {isLoggedIn, isHost} = require("../middleware.js");
const Booking = require('../models/booking.js');

router.get("/", isLoggedIn , async (req, res) => {
    let booking = await Booking.find({user: req.user._id}).populate('listing') ;
    console.log(booking);
    res.render("bookings/mybooking", {booking});
});

module.exports = router; 