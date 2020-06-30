const express = require('express');
const CourseController = require('../Controllers/Courses');
const md_auth = require('../Middleware/authenticated');

const api = express.Router();

api.post('/add-course', md_auth.ensureAuth, CourseController.addCourse);
api.get('/get-courses', CourseController.getCourses);

module.exports = api;
