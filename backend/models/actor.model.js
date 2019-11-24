const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Gender:{
        type:Number
    },
    DOB:{
        type:Date
    },
    Bio:{
        type:String
    }
})

module.exports = mongoose.model('actorClctn',actorSchema);