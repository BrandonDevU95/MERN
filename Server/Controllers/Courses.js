const Course = require('../Models/Courses');
const Courses = require('../Models/Courses');

function addCourse(req, res) {
	const body = req.body;
	const course = new Course(body);
	course.order = 1000;

	course.save((err, courseStored) => {
		if (err) {
			res.status(400).send({ code: 400, message: 'El curso ya existe' });
		} else {
			if (!courseStored) {
				res.status(400).send({
					code: 400,
					message: 'No se pudo crear el curso',
				});
			} else {
				res.status(200).send({ code: 200, message: 'Curso creado' });
			}
		}
	});
}

function getCourses(req, res) {
	Courses.find()
		.sort({ order: 'asc' })
		.exec((err, coursesStored) => {
			if (err) {
				res.status(500).send({ code: 500, message: 'Error del servidor' });
			} else {
				if (!coursesStored) {
					res.status(404).send({
						code: 404,
						message: 'No se econtro cursos',
					});
				} else {
					res.status(200).send({ code: 200, courses: coursesStored });
				}
			}
		});
}

module.exports = {
	addCourse,
	getCourses,
};
