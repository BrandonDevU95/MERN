const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const { API_VERSION } = require('./config');

//Load routing
const authRoutes = require('./Routers/Auth');
const userRoutes = require('./Routers/User');

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

//Configure Header HTTP

//Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
