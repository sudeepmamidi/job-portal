const mongoose = require('mongoose');
const passport = require('passport');

const Applied = mongoose.model('Applied')

module.exports.appliedJobs = (req, res, next) => {
   const findoneres =  Applied.findOne({id:req.params.id});
    var applied = new Applied();
    applied.id = req.params.id;
    applied.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });

   }


   //api for get applied: http://localhost:3000/apply/getapplied

   module.exports.getallapplied = async(req,res)=>{
    var result = await Applied.find({},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.send('error');
        }
    });
}