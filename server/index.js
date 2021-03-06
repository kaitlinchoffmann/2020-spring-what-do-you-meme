const express = require('express');
const path = require('path');

const gameController = require('./controllers/game');
const usersController = require('./controllers/users');

const app = express();
const port = 3000;

app
    .use(express.json())  //this is middleware for entire server, a function gets returned here
    .use(express.urlencoded({ extended: true })) //must pass an extended, we will not be using this in this game, but need it for using regular forms
    .use(express.static( __dirname + '/../client/dist')) //returns a functions when called, functions gets called every time a request comes in. Looks to see if there is a file that exists in the path. If so, will end. If not, will continue
    .get('/', (req, res) => res.send('Hello World!')) //more specific version of use
    .use('/game', gameController)  //general than get
    .use('/users', usersController)

    .use((req, res) => { 
        const homePath  = path.join(__dirname + '/../client/dist/index.html');
        console.log(homePath);
        res.sendFile(homePath)

    }) //this is a catch-all, if nothing works, send me back to index
    .use( (err, req, res, next ) => {
        console.error(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message });
    } )

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));