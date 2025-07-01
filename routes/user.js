const express = require("express");
const User = require("../models/user");
const passport = require("passport");
const router = express.Router();

router.get("/signup", (req, res) => {
    res.render('users/signup');
});

router.post("/signup", async (req, res) => {
    try {
        let {username, email, password} = req.body;
        const newuser = new User({email, username});
        const registeruser = await User.register(newuser, password);
        console.log(registeruser);
        req.flash("success", "Welcome to WanderLust");
        res.redirect("/listings");
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup"); 
    }
});

router.get("/login", (req, res) => {
    res.render("users/login");
});

router.post("/login", passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), async (req,res) => {
    req.flash("success", "Welcome back to wanderlust");
    res.redirect("/listings");
});

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out sucesfully");
        res.redirect("/listings");
    });
})

module.exports = router;