const express = require("express");
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const router = express.Router();

router.get("/signup", (req, res) => {
    res.render('users/signup');
});

router.post("/signup", async (req, res, next) => {
    try {
        let {username, email, password} = req.body;
        const newuser = new User({email, username});
        const registeruser = await User.register(newuser, password);
        console.log(registeruser);
        req.login(registeruser, (err) => {
            if(err) {
                next(err);
            }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
        })
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup"); 
    }
});

router.get("/login", (req, res) => {
    res.render("users/login");
});

router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), async (req,res) => {
    req.flash("success", "Welcome back to wanderlust");
    res.redirect(res.locals.redirectUrl || "/listings");
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