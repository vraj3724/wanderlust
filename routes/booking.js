const express = require('express');
const router = express.Router({mergeParams: true});
const { validateBooking } = require('../middleware');
const bookingController = require('../controllers/booking.js');
const Booking = require('../models/booking.js');

router
    .route("/")
    .get(validateBooking, bookingController.getBookingForm)
    .post(validateBooking, bookingController.createBooking);

module.exports = router