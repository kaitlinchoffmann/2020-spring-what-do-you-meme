/*
*/
const express = require('express');

const quoteCards = require('../models/quoteCards'); // . is local
const game = require('../models/Game');

const router = express.Router();

game.SubmitCaption("Corona Sucks", 0);

router
    .use('/quotecards', (req, res, next) =>  { //this is middleware
        console.log({ method: req.method, body: req.body });
        next(); //do not pass something in the parameter, will get an error
    }) //next is a function
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length-1]) //last item we just added
    })
    .get('/', (req, res)=>res.send({
        Players: game.Players, PictureDeck: game.PictureDeck, CurrentPicture: game.CurrentPicture,
        CardsInPlay: game.CardsInPlay.map(x=> ({...x, PlayerId: 'unknown' }) )
    }))
    .post('/cardsInPlay', (req, res) => {
        const playerId = req.body.playerId;
        game.SubmitCaption(req.body.caption, playerId);
    })

module.exports = router; //default export    
