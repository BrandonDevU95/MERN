const express = require('express');
const PostController = require('../Controllers/Post');
const md_auth = require('../Middleware/authenticated');

const api = express.Router();

api.post('/add-post', [md_auth.ensureAuth], PostController.addPost);
api.get('/get-posts', PostController.getPosts);
api.put('/update-post/:id', [md_auth.ensureAuth], PostController.updatePost);
api.delete('/delete-post/:id', [md_auth.ensureAuth], PostController.deletePost);
api.get('/get-post/:url', PostController.getPost);

module.exports = api;
