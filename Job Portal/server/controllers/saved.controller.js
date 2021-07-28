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


//api: http://localhost:3000/save/getsaved

module.exports.getallsaved = async(req,res)=>{
    var result = await Saved.find({},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.send('error');
        }
    });
}