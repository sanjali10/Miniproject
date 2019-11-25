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

// create new node for actor and save into DB
exports.createNode = (req, res) => {
    let actrArray = [];

    if (!req.body) {
        return res.status(400).send({
            message: "Request body can't be empty"
        });
    }
    // for(var i=0;i<req.body.length;i++){
    //     actrArray[i][id]=req.body[i][id];
    // }
    const maxQuery = Node.find({}).sort({
        id: -1
    }).limit(1).select("id").then(ids => console.log('>>maximum----Id', ids));
    console.log('>>maximumId', maxQuery.id);
    const actorNode = new Node({
        id: req.body.id,
        Name: req.body.name,
        Gender: req.body.gender,
        DOB: req.body.dob,
        Bio: req.body.bio
    });

    actorNode.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};