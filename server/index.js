const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const compression = require('compression');
const session = require('express-session');
const db = require('./db');
const PORT = process.env.PORT || 3000;
const app = express();
const socketio = require('socket.io');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db });
module.exports = app;

const createApp = () => {
    // logging middleware
    app.use(volleyball);

    // body parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // compression middleware
    app.use(compression());

    // static file-serving middleware
    app.use(express.static(path.join(__dirname, '..', 'public')));

    // any remaining requests with an extension (.js, .css, etc.) send 404
    app.use((req, res, next) => {
        if (path.extname(req.path).length) {
            const err = new Error('Page not found');
            err.status = 404;
            next(err);
        } else {
            next();
        }
    });

    // sends index.html
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public/index.html'));
    });

    // error handling endware
    app.use((err, req, res, next) => {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });
};

const startListening = () => {
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));

    // set up our socket control center
    const io = socketio(server);
    require('./socket')(io);
};

const syncDb = () => db.sync();

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
    sessionStore.sync()
        .then(syncDb)
        .then(createApp)
        .then(startListening);
} else {
    createApp();
}