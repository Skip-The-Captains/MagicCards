const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// Añadir carta
router.post('/', cardController.addCard);

// Mostrar cartas
router.get('/', cardController.getCards);


module.exports = router;