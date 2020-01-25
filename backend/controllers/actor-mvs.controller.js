const Node = require('../models/actor-movie.model');

exports.createActrProd = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Request body can't be empty"
        });
    }
    var MaximumID = '';
    var ActrMve = new Node();
    Node.find({}).sort({
        id: -1
    }).limit(1).select("id").then(ids => {
        ids.forEach(id => MaximumID = id.id);

        ActrMve["id"] = MaximumID + 1,
        ActrMve["actorId"] = req.body.actrId,
        ActrMve["movieId"] = req.body.mveID
        
        ActrMve.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
    });
};