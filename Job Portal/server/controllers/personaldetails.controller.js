const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Personaldetails = mongoose.model('Personaldetails');

const employement = require('../models/employement')

// const User = mongoose.model('User');

module.exports.postdetails = (req, res, next) => {
    var personaldetails = new Personaldetails();
    personaldetails.fullName = req.body.fullName;
    personaldetails.email = req.body.email;
    personaldetails.mobile = req.body.mobile;
    personaldetails.address = req.body.address;
    personaldetails.city = req.body.city;
    personaldetails.state = req.body.state;
    personaldetails.postalcode = req.body.postalcode;
    personaldetails.country = req.body.country;
    personaldetails.year = req.body.year;
    personaldetails.month = req.body.month;
    personaldetails.skills = req.body.skills;
    personaldetails.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}
