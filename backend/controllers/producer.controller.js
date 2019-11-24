const Node  = require('../models/producer.model');


exports.getList = (req,res)=>{
    res.json({
        status:'Producer API is working',
        message:'Welcome to RestHub'
    })
}