const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const cookie = require('cookie');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const listing = require('./routes/listing.js');
const review = require('./routes/review.js');

main()
.then(() => {
    console.log("Connection Succesful")
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
  
app.get("/", (req, res) => {
    res.send("The root is working");
});

app.use("/listings", listing);
app.use("/listings/:id/reviews", review);


app.use((req, res, next) => {
  res.status(404).render("error", {
    err: {
      status: 404,
      message: "Page Not Found"
    }
  });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).render("error.ejs", {err});
});

app.listen(8080, () => {
    console.log("Server is listening at port 8080");
});

