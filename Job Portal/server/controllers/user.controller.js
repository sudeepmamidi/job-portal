const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');


//Document: {
//     "fullName":"sudeep",
//     "email":"mamidisudeep98@gmail.com",
//     "password":"sudeep",
//     "mobile": 9177716749,
//     "address": "1-32/a",
//     "city": "Nizamabad",
//     "state": "telangana",
//     "postalcode": 503224,
//     "country": "india",
//     "year": 2021,
//     "month": 6,
//     "skills": "java,nodejs",
//     "currentemployer": "NA",
//     "destination": "NA",
//     "jobdescription": "NA",
//     "experienceinmonths": 0,
//     "previousemployer": "NA",
//     "previousjobdescription": "NA",
//     "previousexperienceinmonths": "NA",
//     "college": "GCTC",
//     "yearpassed": 2020,
//     "graduated": "NA",
//     "graduateschool": "NA",
//     "numberofyearsattend": 4,
//     "skillsorqualifications": "NA",
//     "certification": "NA"

// }

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.mobile = req.body.mobile;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    user.postalcode = req.body.postalcode;
    user.country = req.body.country;
    user.year = req.body.year;
    user.month = req.body.month;
    user.skills = req.body.skills;
    user.currentemployer = req.body.currentemployer;
    user.destination = req.body.destination;
    user.jobdescription = req.body.jobdescription;
    user.experienceinmonths = req.body.experienceinmonths;
    user.previousemployer = req.body.previousemployer;
    user.previousjobdescription = req.body.previousjobdescription;
    user.previousexperienceinmonths = req.body.previousexperienceinmonths;
    user.college = req.body.college;
    user.yearpassed = req.body.yearpassed;
    user.graduated = req.body.graduated;
    user.graduateschool = req.body.graduateschool;
    user.numberofyearsattend = req.body.numberofyearsattend;
    user.skillsorqualifications = req.body.skillsorqualifications;
    user.certification = req.body.certification;
    user.save((err, doc) => {
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

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}

module.exports.updateuserbyid = async(req,res)=>{
    try{
        const id = req.params.id;
        const updates = req.body;
        const options = {new:true}

        const results = await User.findByIdAndUpdate(id,updates,options)
        res.send(results);

    }
    catch(error){
        console.log(error.message)
    }
}