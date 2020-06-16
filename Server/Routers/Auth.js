const express = require('express');
const AuthController = require('../Controllers/Auth');
const { refreshAccessToken } = require('../Controllers/Auth');

const api = express.Router();

api.post('/refreshAccessToken', AuthController.refreshAccessToken);

module.exports = api;
