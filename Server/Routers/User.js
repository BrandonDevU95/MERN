const express = require('express');
const UserController = require('../Controllers/User');
const md_auth = require('../Middleware/authenticated');

const api = express.Router();

api.post('/sign-up', UserController.signUp);
api.post('/signIn', UserController.signIn);
api.get('/users', [md_auth.ensureAuth], UserController.getUsers);
api.get('/users-active', [md_auth.ensureAuth], UserController.getUsersActive);

module.exports = api;
