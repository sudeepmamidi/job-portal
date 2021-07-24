const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var employmentShema = new mongoose.Schema({
    currentemployeer: {
        type: String,
        required: 'currentemployeer can\'t be empty'
    },
    destination: {
        type: String,
        required: 'Password can\'t be empty',
    },
    jobdescription: {
        type: String,
        required: 'Password can\'t be empty',
    },
    experience: {
        type: String,
        required: 'Password can\'t be empty',
    },
    previousemployer: {
        type: String,
        required: 'Password can\'t be empty',
    },
    previousjobdescription: {
        type: String,
        required: 'Password can\'t be empty',
    },
    previousexperience: {
        type: String,
        required: 'Password can\'t be empty',
    },
});
mongoose.model('employment', employmentShema);