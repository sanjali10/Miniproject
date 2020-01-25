const Node = require('../models/producer.model');


exports.getWorking = (req, res) => {
    res.json({
        status: 'Producer API is working',
        message: 'Welcome to RestHub'
    })
}

exports.getList = (req,res) => {
    Node.find({}).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message
        });
    });
}

exports.createProducer = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Request body can't be empty"
        });
    }
    var MaximumId = '';
    var prodNode = new Node();
    Node.find({}).sort({
            id: -1
        })
        .limit(1).select("id").then(ids => {
            ids.forEach(id => {
                MaximumId = id.id
            });
            prodNode["id"] = MaximumId + 1;
            prodNode["Name"] = req.body.name,
            prodNode["Dob"] = req.body.dob,
            prodNode["Bio"] = req.body.bio

            prodNode.save().then(data=>{
                res.send(data);
            }).catch(err=>{
                res.status(500).send({
                    message: err.message
                });
            });
        });
};