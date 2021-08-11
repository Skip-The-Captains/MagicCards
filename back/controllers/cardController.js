const Card = require('../models/Card');

// Añadir carta
exports.addCard = async (req, res) => {
    console.log(req.body);
    try {
        let card;
        card = new Card(req.body);
        await card.save();
        res.status(card);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al añadir carta (BACK)');
    }
}


// Mostrar cartas
exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        console.log("Errorcito " + error);
        res.status(500).send('Hubo un error al mostrar cartas (BACK)')
    }
}