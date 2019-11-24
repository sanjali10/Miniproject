const mongoose = require('mongoose');
 const  actorMveRltnSchema = mongoose.Schema({
     actorId:{
         type:Number,
         required: true
     },
     movieId:{
        type:Number,
        required: true
    },

 })

 module.exports = mongoose.model('mveActrClctn',actorMveRltnSchema) 