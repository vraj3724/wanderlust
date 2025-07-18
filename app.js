if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
};

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookie = require('cookie');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user.js');

const dbUrl = process.env.ATLASDB_URL;

const listingRouter = require('./routes/listing.js');
const mylistingRouter = require('./routes/mylisting.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');

main()
.then(() => {
    console.log("Connection Succesful")
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

app.locals.mapToken = process.env.MAP_TOKEN;
console.log(process.env.MAP_TOKEN);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret : process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("Error in Mongo Store", err);
});


const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/mylistings", mylistingRouter);
app.use("/", userRouter);


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

