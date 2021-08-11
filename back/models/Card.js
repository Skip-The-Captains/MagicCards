const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    mana: {
        type: String
    },
    type: {
        type: String
    },
    expansion: {
        type: String
    },
    skill: {
        type: String
    },
    power: {
        type: Number
    },
    toughness: {
        type: Number
    }
});

module.exports = mongoose.model('Card', CardSchema);