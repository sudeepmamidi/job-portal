const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var employementSchema = new mongoose.Schema({
    currentemployeer: {
        type: String,
        required: 'currentemployeer name can\'t be empty'
    },
    destination: {
        type: String,
        required: 'destination name can\'t be empty'
    },
    jobdescription: {
        type: String,
        required: 'jobdescription name can\'t be empty'
    },
    previousemployer: {
        type: String,
    },
    previousjobdescription: {
        type: String,
    },
    previousexperience: {
        type: String,
    },   
});
var employement = mongoose.model('Employement', employementSchema);
module.exports = employement;