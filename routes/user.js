const express = require("express");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const router = express.Router();

const userController = require('../controllers/user.js')

router.get("/signup", (req, res) => {
    res.render('users/signup');
});

router.post("/signup", userController.signup);

router.get("/login", (req, res) => {
    res.render("users/login");
});

router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), userController.login);

router.get("/logout", userController.logout);

module.exports = router;