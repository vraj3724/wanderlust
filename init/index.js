const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listings.js');
const { sampleReviews } = require('./reviews.js');
const Review = require('../models/reviews.js');
const User = require('../models/user.js'); // ✅ Add user model

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
  await User.deleteMany({}); // ✅ Clean users too

  // ✅ Create sample users
 const sampleUsers = [
  { username: 'john', email: 'john@mail.com', password: 'pass' },
  { username: 'sara', email: 'sara@mail.com', password: 'pass' },
  { username: 'alice', email: 'alice@mail.com', password: 'pass' },
  { username: 'vraj', email: 'vraj@mail.com', password: 'pass' },       // ✅ New user
  { username: 'maria', email: 'maria@mail.com', password: 'pass' }     // ✅ New user
];


  const userDocs = [];
  for (let user of sampleUsers) {
    const newUser = new User(user);
    await newUser.save();
    userDocs.push(newUser);
  }

  let reviewIndex = 0;

  for (let listingData of initData.data) {
    // ✅ Assign random host from created users
    const randomUser = userDocs[Math.floor(Math.random() * userDocs.length)];
    const newListing = new Listing({ ...listingData, host: randomUser._id });
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
