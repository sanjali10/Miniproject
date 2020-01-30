const mongoose = require('mongoose');
 const  producerSchema = mongoose.Schema({
     id:{
         type:Number,
         required: true
     },
     ProducerName:{
         type:String,
         required:true
     }, 
     Dob:{
        type:Date,
        required:true
    },
    Bio:{
        type:String,
        required:true
    },

 })

 module.exports = mongoose.model('producerClctn',producerSchema) 