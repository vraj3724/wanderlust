const express = require('express');
const router = express.Router({mergeParams: true});
const { validateBooking } = require('../middleware');
const bookingController = require('../controllers/booking.js');
const Booking = require('../models/booking.js');

router
    .route("/")
    .get(validateBooking, bookingController.getBookingForm)
    .post(validateBooking, bookingController.createBooking);


router.delete("/:id", async (req,res) => {
    let {id} = req.params;
    let deletedBooking = await Booking.findByIdAndDelete(id);
    console.log(deletedBooking);
    req.flash("success", "Booking Deleted");
    res.redirect("/mybookings");
})
module.exports = router