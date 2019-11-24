const node = require('../models/movie.model');

exports.getList = (req,res)=>{
    res.json({
        status: 'Movies api is working',
        message: 'Welcome to RESTHub Movies api ',
    })
}