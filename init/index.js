const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listings.js');
const { sampleReviews } = require('./reviews.js');
const Review = require('../models/reviews.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("Connection Succesful")
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
    await Listing.deleteMany({});
    await Review.deleteMany({});

    let reviewIndex = 0;

  for (let listingData of initData.data) {
    const newListing = new Listing(listingData);
    await newListing.save();

    const reviewIds = [];

    // Add 6 reviews for this listing
    for (let i = 0; i < 6; i++) {
      const { comment, rating, author } = sampleReviews[reviewIndex++]; 
      const review = new Review({ comment, rating, author: new mongoose.Types.ObjectId(author) });
      await review.save();
      reviewIds.push(review._id);
    }

    newListing.reviews = reviewIds;
    await newListing.save();
  }

  console.log("✅ Listings and 180 Reviews Initialized");
}; 


initDB();
