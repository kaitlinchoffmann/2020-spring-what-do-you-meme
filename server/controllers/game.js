/*
*/
const express = require('express');

const quoteCards = require('../models/quoteCards'); // . is local

const router = express.Router();

router
    .use('/quotecards', (req, res, next) =>  { //this is middleware
        console.log({ method: req.method, body: req.body });
        next(); //do not pass something in the parameter, will get an error
    }) //next is a function
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length-1]) //last item we just added
    });

module.exports = router; //default export    
