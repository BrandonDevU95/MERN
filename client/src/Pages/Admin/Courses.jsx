import React, { useState, useEffect } from 'react';
import CoursesList from '../../Components/Admin/Courses/CoursesList';
import { getCoursesApi } from '../../API/courses';

const Courses = () => {
	const [courses, setCourses] = useState([]);
	const [reloadCourses, setReloadCourses] = useState(false);

	useEffect(() => {
		getCoursesApi().then((response) => {
			setCourses(response.courses);
		});
		setReloadCourses(false);
	}, [reloadCourses]);

	return (
		<div className='courses'>
			<CoursesList courses={courses} setReloadCourses={setReloadCourses} />
		</div>
	);
};

export default Courses;
