module.exports.calculateBookingPrice = (listingPrice, checkin, checkout) => {
    const checkInDate = new Date(checkin);
    const checkOutDate = new Date(checkout);

    const MS_PER_DAY = 1000 * 60 * 60 * 24;

    const nights = Math.max(1, Math.round((checkOutDate - checkInDate) / MS_PER_DAY));

    const nightly = Number(listingPrice);
    const subtotal = Number(nightly * nights);
    const serviceFee = Number(+(subtotal * 0.15).toFixed(2));
    const total = Number(+(subtotal + serviceFee).toFixed(2));

    return { nights, nightly, subtotal, serviceFee, total }
}