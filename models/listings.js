const mongoose = require("mongoose");
const Review = require('./reviews.js')

const ListingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        image: {
            filename: String,
            url: String
        },

        price: {
            type: Number,
            default: 100,
            required: true
        },

        location: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        },

        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            }
        ]
    }
);

ListingSchema.post("findOneAndDelete", async(listing) => {
    console.log("🔥 Deletion middleware triggered!");
  if(listing) {
    await Review.deleteMany({_id: {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;