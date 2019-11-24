const mongoose = require('mongoose');
 const movieSchema = mongoose.Schema({
     id:{
         type:Number,
         required: true
     },
     Name:{
         type:String,
         required:true
     },
     YearOfRelease: {
     type: String,
     required:true
    },
    Poster:{
        type:String,
        required:true
    },
    prodId:{
        type:Number,
        required:true
    }

 })

 module.exports = mongoose.model('movieClctn',movieSchema) 