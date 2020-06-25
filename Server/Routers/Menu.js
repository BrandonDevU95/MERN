const express = require('express');
const MenuController = require('../Controllers/Menu');
const md_auth = require('../Middleware/authenticated');

const api = express.Router();

api.post('/add-menu', [md_auth.ensureAuth], MenuController.addMenu);
api.get('/get-menu', MenuController.getMenu);

module.exports = api;
