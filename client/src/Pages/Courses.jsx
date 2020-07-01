import React, { useState, useEffect } from 'react';
import { getCoursesApi } from '../API/courses';
import PresentationCourses from '../Components/Web/Courses/PresentationCourses';
import CoursesList from '../Components/Web/Courses/CoursesList';
import { Row, Col, Spin, notification } from 'antd';

const Courses = () => {
	return (
		<Row>
			<Col md={4} />
			<Col md={16}>
				<PresentationCourses />
				<CoursesList />
			</Col>
			<Col md={4} />
		</Row>
	);
};

export default Courses;
