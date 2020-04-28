const Node = require('../models/actor.model');

//get all actor list from the db
exports.getList = (req, res) => {
    Node.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

 exports.getFindRecordById =(req,res)=>{
   let  _id = req.params.id;
     Node.find({_id:{_id}}).then(data=>{
        res.send(JSON.stringify(data));
     }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
 }
// create new node for actor and save into DB
// we are first fetching the maximum id from the db and then creating the new record where id is ( MaximumId+1 ) 
exports.createNode = (req, res) => {
    let actrArray = [];
    if (!req.body) {
        return res.status(400).send({
            message: "Request body can't be empty"
        });
    }
    console.log("req", req);
    var MaximumId = '';
    var actorNode = new Node();
    Node.find({}).sort({
        id: -1
    }).limit(1).select("id").then(ids => {
        ids.forEach(id => {
            MaximumId = id.id
        });
        actorNode["id"] = MaximumId + 1,
            actorNode["ActrName"] = req.body.name,
            actorNode["Gender"] = req.body.gender,
            actorNode["DOB"] = req.body.dob,
            actorNode["Bio"] = req.body.bio,
            // saving record 
            actorNode.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
    });
};

exports.deleteActorById = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Request body can't be empty"
        });
    }
    const Ids = req.body.ids;
        Node.findByIdAndRemove(req.params.id).then(() => {
            res.send({msg:"deleted Successfully"});
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.updateActorById = (req,res) => {
   if(!req.body && req.params){
       return res.status(400).send({
           message:"Request body can't be empty"
       });
   }
   const id = req.params.id;
   console.log(">>>body",req.body)
    // const actorNode ={};
    // actorNode["ActrName"] = req.body.name;
    // actorNode["Gender"] = req.body.gender;
    // actorNode["DOB"] = req.body.dob;
    // actorNode["Bio"] = req.body.bio;
    Node.findByIdAndUpdate(id, {$set:req.body}).then(()=>{
        res.send({msg:"Updated Successfully"});
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}