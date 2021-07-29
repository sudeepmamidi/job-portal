const mongoose = require('mongoose');
const passport = require('passport');

const Saved = mongoose.model('Saved')


//api:http://localhost:3000/save/saved/60f036ee523424348c8f7c6a

module.exports.postsavedId = (req, res, next) => {


   
 
        var query = req.params.id
        Saved.findOne({id:query}, function(err, example){
            if(err) console.log(err);
            if ( example){
                res.send("You have already been saved this Job");
            } else {
     
                var saved = new Saved();
                saved.id = req.params.id;
                saved.save(function(err, example) {
                    if(err) console.log(err);
                    res.send(example);
                });
            }
        });

            //     var saved = new Saved();
            //     saved.id = req.params.id;
            //     saved.save((err, doc) => {
            //         if (!err)
            //         if(doc.id!=req.params.id){
            //             // doc.remove();
            //             res.send("Your id inserted"+doc.id);
            //         }
            //         else{
            //             // console.log(doc.id);
            //              res.send("doc");
            //             doc.remove();
            //             // return next(err);
            //         }
            //             //res.send(doc);
            //         else {
                        
            //         //    Saved.findOne({id:req.params.id},(err,result)=>{
            //         //        if(err)
            //         //        {
            //        res.send(err);
            //         //        }
            //         //        else{
            //         //            if(result.id==req.params.id){
            //         //             //    result.remove();
            //         //                res.send("you have already Saved");
            //         //            }
            //         //            else{
            //         //                res.send(result);
            //         //            }
            //         //        }
            //         //    })
            //         }
            //     });
            // }

    // Saved.findOne({id:req.params.id},(err,result)=>{
    //     if(err){
    //         res.send(err);
    //     }
    //     else{
    //         if(result.id!=req.params.id){
    //             res.send("You have already saved this job");
    //             var saved = new Saved();
    //             saved.id = req.params.id;
    //             saved.save((err, doc) => {
    //                 if (!err)
    //                     res.send(doc);
    //                 else {
    //                     return next(err);
    //                 }
    //             });
    //         }
    //         else{
    //             res.send("You have already saved this job");
    //             var saved = new Saved();
    //             saved.id = req.params.id;
    //             saved.save((err, doc) => {
    //                 if (!err)
    //                     res.send(doc);
    //                 else {
    //                     return next(err);
    //                 }
    //             });
    //         }
    //     }
    // })
    
}


//api: http://localhost:3000/save/getsaved

module.exports.getallsaved = async(req,res)=>{
    var result = await Saved.find({},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.send('error');
        }
    });

}


//deleteApi :http://localhost:3000/save/deletesaved/61010a246ea9760758a4ae06

module.exports.deletesavedyid = async(req,res)=>{
    const id = req.params.id
    if(id==null)
    {
        res.send('id required in parameters');
    }
    else{
        Saved.findByIdAndRemove({_id:req.params.id},(err,doc)=>{
            if(err){
                doc.status(500).json({errmsg:err});
            }
            else{
                res.status(200).json({msg:doc});
            }
        })
    }
}