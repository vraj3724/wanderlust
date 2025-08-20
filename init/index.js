const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listings.js');
const { sampleReviews } = require('./reviews.js');
const Review = require('../models/reviews.js');

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Review.deleteMany({});

  let reviewIndex = 0;

  for (let listingData of initData.data) {
    const newListing = new Listing(listingData);
    await newListing.save();

    const reviewIds = [];

    for (let i = 0; i < 6; i++) {
      const { comment, rating, author } = sampleReviews[reviewIndex++];
      const review = new Review({
        comment,
        rating,
        author: new mongoose.Types.ObjectId(author)
      });
      await review.save();
      reviewIds.push(review._id);
    }

    newListing.reviews = reviewIds;
    await newListing.save();
  }

  console.log("✅ Listings and 180 Reviews Initialized");
};

initDB();
