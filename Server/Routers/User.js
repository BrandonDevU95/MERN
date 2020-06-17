const express = require('express');
const UserController = require('../Controllers/User');

const api = express.Router();

api.post('/sign-up', UserController.signUp);
api.post('/signIn', UserController.signIn);
api.get('/users', UserController.getUsers);

module.exports = api;
