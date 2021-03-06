const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const { API_VERSION } = require('./config');

//Load routing
const authRoutes = require('./Routers/Auth');
const userRoutes = require('./Routers/User');
const menuRoutes = require('./Routers/Menu');
const newsletterRoutes = require('./Routers/Newsletter');
const coursesRoutes = require('./Routers/Courses');
const postRoutes = require('./Routers/Post');

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

//Configure Header HTTP
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE'
	);
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, newsletterRoutes);
app.use(`/api/${API_VERSION}`, coursesRoutes);
app.use(`/api/${API_VERSION}`, postRoutes);

module.exports = app;
