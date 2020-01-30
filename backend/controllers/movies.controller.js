const Node = require('../models/movie.model');

exports.getList = (req, res) => {
    res.json({
        status: 'Movies api is working',
        message: 'Welcome to RESTHub Movies api ',
    })
}

exports.createMovie = (req, res) => {
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
            prodNode["MovieName"] = req.body.name,
            prodNode["YearOfRelease"] = req.body.yrOfRel,
            prodNode["Poster"] = req.body.poster
            prodNode["ProdId"] = req.body.prodId,
            prodNode["ActorId"] = req.body.actorId
            prodNode.save().then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
        });
}
exports.findMoviesDetails = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Request body can't be empty"
        })
    }
    Node.find({}).populate('ProdId').populate('ActorId').then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}