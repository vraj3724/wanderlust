const express = require("express");
const User = require("../models/user");
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

module.exports = router;