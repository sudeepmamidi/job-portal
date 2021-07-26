const mongoose = require('mongoose');
const passport = require('passport');

const Saved = mongoose.model('Saved')

module.exports.postsavedId = (req, res, next) => {
    var saved = new Saved();
    saved.id = req.params.id;
    saved.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}