const express = require('express');
const gameController = require('./controllers/game');

const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('Hello World!')) //more specific version of use
    .use('/game', gameController)  //general than get

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));