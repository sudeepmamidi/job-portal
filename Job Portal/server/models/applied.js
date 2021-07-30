const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var appliedSchema = new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:'Adminjobposts'
    }
},{timestamps:true});

mongoose.model('Applied', appliedSchema);
