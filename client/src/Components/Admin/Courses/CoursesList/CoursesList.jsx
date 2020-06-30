import React from 'react';
import { getCourseDataUdemyApi } from '../../../../API/courses';

import './CoursesList.scss';

const CoursesList = (props) => {
	const { courses, setReloadCourses } = props;

	if (courses.length > 0) {
		courses.forEach((course) => {
			getCourseDataUdemyApi(course.idCourse).then((response) => {
				console.log(response);
			});
		});
	}

	return (
		<div>
			<h1>Lorem ipsum dolor sit amet.</h1>
		</div>
	);
};

export default CoursesList;
