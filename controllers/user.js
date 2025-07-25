const User = require("../models/user");


module.exports.signup = async (req, res, next) => {
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
};

module.exports.login = async (req,res) => {
    req.flash("success", "Welcome back to wanderlust");
    res.redirect(res.locals.redirectUrl || "/listings");
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out sucesfully");
        res.redirect("/listings");
    });
};