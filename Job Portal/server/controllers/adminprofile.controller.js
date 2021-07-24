const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Adminprofile = mongoose.model('AdminProfile')

// const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var adminprofile = new Adminprofile();
    adminprofile.fullName = req.body.fullName;
    adminprofile.password = req.body.password;
    adminprofile.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}
