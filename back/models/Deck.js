const mongoose = require('mongoose');

const DeckSchema = mongoose.Schema({
    name: {
        type: String
    },
    colours: {
        type: String
    },
    dynamic: {
        type: String
    },
    planeswalker: {
        type: String
    },
    name_planeswalker: {
        type: String
    }
});

module.exports = mongoose.model('Deck', DeckSchema);