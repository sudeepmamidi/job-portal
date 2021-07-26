const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Personaldetails = mongoose.model('Personaldetails');

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
    personaldetails.currentemployer = req.body.currentemployer;
    personaldetails.destination = req.body.destination;
    personaldetails.jobdescription = req.body.jobdescription;
    personaldetails.experienceinmonths = req.body.experienceinmonths;
    personaldetails.previousemployer = req.body.previousemployer;
    personaldetails.previousjobdescription = req.body.previousjobdescription;
    personaldetails.previousexperienceinmonths = req.body.previousexperienceinmonths;
    personaldetails.college = req.body.college;
    personaldetails.yearpassed = req.body.yearpassed;
    personaldetails.graduated = req.body.graduated;
    personaldetails.graduateschool = req.body.graduateschool;
    personaldetails.numberofyearsattend = req.body.numberofyearsattend;
    personaldetails.skillsorqualifications = req.body.skillsorqualifications;
    personaldetails.certification = req.body.certification;
    personaldetails.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                res.remove();
                return next(err);
        }

    });
}


module.exports.getpersonaldata = async(req,res)=>{
    Personaldetails.findById({_id:req.params.id},(err,doc)=>{
        if(err){
            doc.status(500).json({errmsg:err});
        }
        else{
            res.status(200).json({msg:doc});
        }
    })
}
