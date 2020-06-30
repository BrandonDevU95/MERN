const express = require('express');
const CourseController = require('../Controllers/Courses');
const md_auth = require('../Middleware/authenticated');

const api = express.Router();

api.post('/add-course', CourseController.addCourse);

module.exports = api;
