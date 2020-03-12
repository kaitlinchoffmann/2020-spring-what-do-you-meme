const express = require('express');
const gameController = require('./controllers/game');

const app = express();
const port = 3000;

app
    .use(express.json())  //this is middleware for entire server, a function gets returned here
    .use(express.urlencoded({ extended: true })) //must pass an extended, we will not be using this in this game, but need it for using regular forms
    .get('/', (req, res) => res.send('Hello World!')) //more specific version of use
    .use('/game', gameController)  //general than get

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));