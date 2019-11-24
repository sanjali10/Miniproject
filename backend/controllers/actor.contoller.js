const Node = require('../models/actor.model');

exports.getList = (req,res)=>{
    res.json({
        status: 'Actor api is working',
        message: 'Welcome to RESTHub Actor api ',
    });
}