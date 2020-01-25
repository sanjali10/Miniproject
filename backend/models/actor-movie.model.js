const mongoose = require('mongoose');
const actorMveRltnSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    actorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'actorClctn'
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movieClctn'
    },

})

module.exports = mongoose.model('mveActrClctn', actorMveRltnSchema)