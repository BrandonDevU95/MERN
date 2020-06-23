const express = require('express');
const UserController = require('../Controllers/User');
const multipart = require('connect-multiparty');
const md_auth = require('../Middleware/authenticated');
const md_upload_avatar = multipart({ uploadDir: './Uploads/Avatar' });

const api = express.Router();

api.post('/sign-up', UserController.signUp);
api.post('/signIn', UserController.signIn);
api.get('/users', [md_auth.ensureAuth], UserController.getUsers);
api.get('/users-active', [md_auth.ensureAuth], UserController.getUsersActive);
api.put(
	'/upload-avatar/:id',
	[md_auth.ensureAuth, md_upload_avatar],
	UserController.uploadAvatar
);
api.get('/get-avatar/:avatarName', UserController.getAvatar);
api.put('/update-user/:id', [md_auth.ensureAuth], UserController.updateUser);
api.put(
	'/activate-user/:id',
	[md_auth.ensureAuth],
	UserController.activateUser
);
api.delete('/delete-user/:id', [md_auth.ensureAuth], UserController.deleteUser);

module.exports = api;
