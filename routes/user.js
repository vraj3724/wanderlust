const express = require("express");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const router = express.Router();

const userController = require('../controllers/user.js')

router
    .route("/signup")
    .get((req, res) => {
        res.render('users/signup');
    })
    .post(userController.signup
);

router
    .route("/login")
    .get((req, res) => {
        res.render("users/login");
    })
    .post(
        saveRedirectUrl, 
        passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), 
        userController.login
);

router.get("/logout", userController.logout);

module.exports = router;