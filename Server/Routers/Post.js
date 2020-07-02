const express = require('express');
const PostController = require('../Controllers/Post');
const md_auth = require('../Middleware/authenticated');

const api = express.Router();

api.post('/add-post', [md_auth.ensureAuth], PostController.addPost);

module.exports = api;
