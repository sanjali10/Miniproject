const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    ActrName: {
        type: String,
        required: true
    },
    Gender: {
        type: String
    },
    DOB: {
        type: String
    },
    Bio: {
        type: String
    },

})

module.exports = mongoose.model('actorClctn', actorSchema);