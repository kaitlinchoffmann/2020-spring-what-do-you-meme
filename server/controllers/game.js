/*
*/
const express = require('express');

const quoteCards = require('../models/quoteCards'); // . is local
const game = require('../models/Game');

const router = express.Router();

router
    .get('/', (req, res) => res.send({
        Players: game.Players, PictureDeck: game.PictureDeck, CurrentPicture: game.CurrentPicture,
        CardsInPlay: game.CardsInPlay.map(x=> ({...x, PlayerId: 'unknown' }) ) 
    }) )
    .post('/join', (req, res)=> res.send(game.Join(req.body.userId)) )//next is a function
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length-1]) //last item we just added
    })
    
    .post('/cardsInPlay', (req, res) => {
        const playerId = req.body.playerId;
        game.SubmitCaption(req.body.caption, playerId);
        res.send({ success: true })
    })

module.exports = router; //default export    
