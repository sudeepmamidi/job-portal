const mongoose = require('mongoose');

var adminjobpostSchema = new mongoose.Schema({
    jobId: {
        type: String,
    },
    jobTitle: {
        type: String,
        
    },
    jobPostedDate:{
        type:String,
    },
    role:{
        type:String,
    },
    responsibility:{
        type:String,
    },
    companyName:{
        type:String,
    },
    experience:{
        type:Number,
    },
    salaryRange:{
        type:Number,
    },
    noOfPositions:{
        type:String,
    },
    location:{
        type:String,
    },
    skillsAndQualifications:{
        type:String,
    },
    degree:{
        type:String,
        enum:['UG','PG']
    },
    companyInfo:{
        type:String,
    },
    employmentType:{
        type:String,
        enum:['FullTime','fulltime','parttime','PartTime']
    },
    industryType:{
        type:String,
        enum:['HardWare','Software','hardware','software']
    },
    search:{
        type:String,
    },
    jobDescription:{
        type:String,
    }

});

mongoose.model('Adminjobposts', adminjobpostSchema);