import React, { useState, useEffect } from 'react';
import { getCoursesApi } from '../API/courses';
import PresentationCourses from '../Components/Web/Courses/PresentationCourses';
import CoursesList from '../Components/Web/Courses/CoursesList';
import { Row, Col, Spin, notification } from 'antd';

const Courses = () => {
	const [courses, setCourses] = useState(null);

	useEffect(() => {
		getCoursesApi()
			.then((response) => {
				if (response?.code !== 200) {
					notification['warning']({
						message: response.message,
					});
				} else {
					setCourses(response.courses);
				}
			})
			.catch(() => {
				notification['error']({
					message: 'Error del Servidor',
				});
			});
	}, []);

	return (
		<Row>
			<Col md={4} />
			<Col md={16}>
				<PresentationCourses />
				{!courses ? (
					<Spin
						tip='Cargando Cursos'
						style={{
							textAlign: 'center',
							width: '100%',
							padding: '20px',
						}}
					/>
				) : (
					<CoursesList courses={courses} />
				)}
			</Col>
			<Col md={4} />
		</Row>
	);
};

export default Courses;
