const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var popularVideos = require('index');
//const oauthServer = require('./routes/oauth-server');
//const intents = require('./routes/dialogflow-intents');
//const auth = require('./routes/auth');
//const intents = require('./routes/google-home');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use('/',auth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/ghome/echohandler', popularVideos);

module.exports = app;
