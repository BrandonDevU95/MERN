import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Rate, notification } from 'antd';
import { getCourseDataUdemyApi } from '../../../../API/courses';

import './CoursesList.scss';

const CoursesList = (props) => {
	const { courses } = props;

	return (
		<div className='courses-list'>
			<Row>
				{courses.map((course) => (
					<Col key={course._id} md={8} className='courses-list__course'>
						<Course course={course} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default CoursesList;

function Course(props) {
	const { course } = props;
	const [courseInfo, setCourseInfo] = useState({});
	const { Meta } = Card;

	useEffect(() => {
		getCourseDataUdemyApi(course.idCourse)
			.then((response) => {
				if (response?.code !== 200) {
					notification['warning']({
						message: response.message,
					});
				} else {
					setCourseInfo(response.data);
				}
			})
			.catch(() => {
				notification['error']({
					message: 'Error del Servidor',
				});
			});
	}, [course]);

	return (
		<a href='#' target='_blank' rel='noopener noreferrer'>
			<Card
				cover={
					<img src={courseInfo.image_480x270} alt={courseInfo.title} />
				}
			>
				<Meta title={courseInfo.title} description={courseInfo.headline} />
				<Button>Entrar en el Curso</Button>
				<div className='courses-list__course-footer'>
					<span>
						{course.price ? `$${course.price}` : courseInfo.price}
					</span>
					<div>
						<Rate disabled defaultValue={5} />
					</div>
				</div>
			</Card>
		</a>
	);
}
