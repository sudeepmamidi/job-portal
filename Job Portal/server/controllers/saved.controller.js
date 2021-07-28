const mongoose = require('mongoose');
const passport = require('passport');

const Saved = mongoose.model('Saved')

module.exports.postsavedId = (req, res, next) => {
    var saved = new Saved();
    saved.id = req.params.id;
    saved.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
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