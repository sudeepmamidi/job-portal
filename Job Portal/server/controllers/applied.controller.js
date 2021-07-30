const mongoose = require('mongoose');
const passport = require('passport');

const Applied = mongoose.model('Applied')
const Saved = mongoose.model('Saved')

module.exports.appliedJobs = (req, res, next) => {
    var query = req.params.id
    Applied.findOne({id:query}, function(err, example){
        if(err) console.log(err);
        if ( example){
            res.send("You have already been Applied this Job");
        } else {
            var applied = new Applied();
            applied.id = req.params.id;
            applied.save(function(err, example) {
                if(err) {console.log(err);}
                else{
                    Saved.findOneAndDelete({id:query},(err,result)=>{
                        if(err){
                            res.send('error while deleting');
                        }
                        else{
                            res.send("You have applied for this job");
                        }

                    })
                }
                
            });
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
    })
    .populate({ path: 'id', select: ['jobId','jobTitle','role','companyName'] });
    // .populate('id');
}