const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    MovieName: {
        type: String,
        required: true
    },
    YearOfRelease: {
        type: String,
        required: true
    },
    Poster: {
        type: String,
        required: true
    },
    ProdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'producerClctn'
    },
    ActorId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'actorClctn'
    }]

})

module.exports = mongoose.model('movieClctn', movieSchema)