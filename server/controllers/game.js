/*
*/
const express = require('express');

const quoteCards = require('../models/quoteCards'); // . is local

const router = express.Router();

router
    .get('/quoteCards', (req, res) => res.send(quoteCards));

module.exports = router; //default export    
