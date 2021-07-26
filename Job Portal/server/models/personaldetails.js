const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var personalSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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
},{timestamps: true});
mongoose.model('Personaldetails', personalSchema);