const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    mobile: {
        type: Number,
        required: 'mobile name can\'t be empty'
    },
    address: {
        type: String,
        required: 'address name can\'t be empty'
    },
    city: {
        type: String,
        required: 'city name can\'t be empty'
    },
    state: {
        type: String,
        required: 'state name can\'t be empty'
    },
    postalcode: {
        type: Number,
        required: 'postal code name can\'t be empty'
    },
    country: {
        type: String,
        required: 'country name can\'t be empty'
    },
    year: {
        type: Number,
        required: 'year can\'t be empty'
    },
    month: {
        type: Number,
        required: 'month name can\'t be empty'
    },
    skills: {
        type: String,
        required: 'skills name can\'t be empty'
    },
    currentemployer: {
        type: String,
        required: 'currentemployer name can\'t be empty'
    },
    destination: {
        type: String,
        required: 'destination name can\'t be empty'
    },
    jobdescription: {
        type: String,
        required: 'jobdescription name can\'t be empty'
    },
    experienceinmonths: {
        type: Number,
        max:2,
        required: 'experienceinmonths name can\'t be empty'
    },
    previousemployer: {
        type: String,
        required: 'previousemployer name can\'t be empty'
    },
    previousjobdescription: {
        type: String,
        required: 'previousjobdescription name can\'t be empty'
    },
    previousexperienceinmonths: {
        type: String,
        required: 'previousexperienceinmonths name can\'t be empty'
    },
    college: {
        type: String,
        required: 'skills name can\'t be empty'
    },
    yearpassed: {
        type: Number,
        required: 'skills name can\'t be empty'
    },
    graduated: {
        type: String,
        required: 'skills name can\'t be empty'
    },
    graduateschool: {
        type: String,
        required: 'skills name can\'t be empty'
    },
    numberofyearsattend: {
        type: Number,
        required: 'skills name can\'t be empty'
    },
    skillsorqualifications: {
        type: String,
        required: 'skills name can\'t be empty'
    },
    certification: {
        type: String,
        required: 'skills name can\'t be empty'
    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}



mongoose.model('User', userSchema);