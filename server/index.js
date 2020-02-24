const express = require('express');

const quoteCards = require('./game/quoteCards'); // . is local

const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('Hello World!'))
    .get('/game/quoteCards', (req, res) => res.send(quoteCards));


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));