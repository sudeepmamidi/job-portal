const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

// const Personaldetails = mongoose.model('Personaldetails');

const Employement = require('../models/employement')

// const User = mongoose.model('User');

module.exports.postemployement = (req, res, next) => {
    var employement = new Employement();
    employement.currentemployeer = req.body.currentemployeer;
    employement.destination = req.body.destination;
    employement.jobdescription = req.body.jobdescription;
    employement.previousemployer = req.body.previousemployer;
    employement.previousjobdescription = req.body.previousjobdescription;
    employement.previousexperience = req.body.previousexperience;
    employement.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
                return next(err);
        }
    });
}
