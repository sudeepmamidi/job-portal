const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const e = require('express');

// const User = mongoose.model('User');

const Admin = mongoose.model('Adminjobposts')

module.exports.jobpost = (req, res, next) => {
    var admin = new Admin();
    admin.jobId = req.body.jobId;
    admin.jobTitle = req.body.jobTitle;
    admin.jobPostedDate = req.body.jobPostedDate;
    admin.role = req.body.role;
    admin.responsibility = req.body.responsibility;
    admin.companyName = req.body.companyName;
    admin.experience = req.body.experience;
    admin.salaryRange = req.body.salaryRange;
    admin.noOfPositions = req.body.noOfPositions;
    admin.location = req.body.location;
    admin.skillsAndQualifications = req.body.skillsAndQualifications;
    admin.degree = req.body.degree;
    admin.companyInfo = req.body.companyInfo;
    admin.employmentType = req.body.employmentType;
    admin.industryType = req.body.industryType;
    admin.search = req.body.search;
    admin.jobDescription = req.body.jobDescription;
    admin.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
                return next(err);
        }
    });
}

module.exports.getall = async(req,res)=>{
    var result = await Admin.find({},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.send('error');
        }
    });
}

module.exports.updatedata= async(req,res)=>{
        try{
            const id = req.body._id;
            const updates = req.body;
            const options = {new:true}

            const results = await Admin.findByIdAndUpdate(id,updates,options)
            res.send(results);

        }
        catch(error){
            console.log(error.message)
        }
}

module.exports.deletedata=async(req,res)=>{
    Admin.findByIdAndRemove({_id:req.params.id},(err,doc)=>{
        if(err){
            doc.status(500).json({errmsg:err});
        }
        else{
            res.status(200).json({msg:doc});
        }
    })
}

module.exports.filterbysearchandlocation = async (req,res)=>{
    var search = req.body.search;
    var location = req.body.location;
    if(search==null||location==null)
    {
        res.send("required search ot location fields")
    }
    else{
        var res = await Admin.find({ search: { $eq: req.body.search },location: { $eq: req.body.location }},(err,doc)=>{
            if(err){
             return res.send(err);
            }
            else{
             // console.log(res);
             return res.send(doc);
             // console.log(res);
            }
        })
         //console.log(res);
    }
}

module.exports.searchbyrole = async(req,res)=>{
    var role = req.body.role;
    if(role==null)
    {
        res.send("required role field")
    }
    else{
        var res = await Admin.find({ role: { $eq: req.body.role }},(err,doc)=>{
            if(err){
             return res.send(err);
            }
            else{
             // console.log(res);
             return res.send(doc);
             // console.log(res);
            }
        })
         //console.log(res);
    }

}

module.exports.getcognizent = async(req,res)=>{

    var res = await Admin.find({companyName:'Cognizent'},(err,doc)=>{
        if(err){
         return res.send(err);
        }
        else{
         // console.log(res);
         return res.send(doc);
         // console.log(res);
        }
    })

}


module.exports.gettcs = async(req,res)=>{

    var res = await Admin.find({companyName:'Tcs'},(err,doc)=>{
        if(err){
         return res.send(err);
        }
        else{
         // console.log(res);
         return res.send(doc);
         // console.log(res);
        }
    })

}

module.exports.getbycompany = async(req,res)=>{
    companyname = req.params.companyName;
    if(companyname==null){
        res.send("required parameter");
    }
    else{
        var res = await Admin.find({companyName:req.params.companyName},(err,doc)=>{
            if(err){
             return res.send(err);
            }
            else{
             // console.log(res);
             return res.send(doc);
             // console.log(res);
            }
        })
    }
}