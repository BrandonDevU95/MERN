import React, { useState, useEffect, Fragment } from 'react';
import { getCoursesApi } from '../API/courses';
import PresentationCourses from '../Components/Web/Courses/PresentationCourses';
import CoursesList from '../Components/Web/Courses/CoursesList';
import { Helmet } from 'react-helmet';
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
		<Fragment>
			<Helmet>
				<title>MUVA WEB DESIGN | Cursos</title>
				<meta
					name='description'
					content='Cursos | Web sobre programacion Lorem ipsum dolor sit amet.'
					data-react-helmet='true'
				/>
			</Helmet>
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
		</Fragment>
	);
};

export default Courses;
