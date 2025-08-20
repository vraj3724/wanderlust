const Booking = require('../models/booking.js');
const Listing = require('../models/listings.js');
const { calculateBookingPrice } = require('../utils/CalculatePrice.js');

module.exports.getBookingForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
        if(!listing) {
        req.flash("error", "Listing Doesn't exist");
        return res.redirect("/listings");
    };
  const { checkin, checkout, guest } = req.query;

  const { nights, subtotal, serviceFee, total } = calculateBookingPrice(
    listing.price,
    checkin,
    checkout,
  );

  res.render('bookings/review', {
    listing,
    checkin,
    checkout,
    guest,
    nights,
    subtotal,
    serviceFee,
    total
  });
};

module.exports.createBooking = async (req, res) => {
    const { checkin, checkout, guest } = req.body;
    const listingId = req.params.id; 

    const listing = await Listing.findById(listingId);
    if (!listing) {
    req.flash("error", "Listing Doesn't exist");
    return res.redirect("/listings");
  }

    const { nights, subtotal, serviceFee, total } = calculateBookingPrice(
    listing.price,
    checkin,
    checkout,
  );
    
    const newBooking = new Booking({
      user: req.user._id,
      checkInDate: new Date(checkin),
      checkOutDate: new Date(checkout),
      Guest: guest,
      price: total,
      status: "confirmed",
      listing: listingId,
    });

    const savedBooking = await newBooking.save();
    console.log(savedBooking);
    req.flash("success", "Booking successful!");
    res.redirect(`/listings/${listingId}`);
};
