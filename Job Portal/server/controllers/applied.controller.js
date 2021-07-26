const mongoose = require('mongoose');
const passport = require('passport');

const Applied = mongoose.model('Applied')

module.exports.appliedJobs = (req, res, next) => {
   const findoneres =  Applied.findOne({id:req.params.id});
    var applied = new Applied();
    applied.id = req.params.id;
    applied.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });

   }