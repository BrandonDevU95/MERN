import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import reactJsHooks from '../../../Assets/img/jpg/react-js-hooks.jpg';
import rectNative from '../../../Assets/img/jpg/react-native.jpg';
import javaScript from '../../../Assets/img/jpg/javascript-es6.jpg';
import wordPress from '../../../Assets/img/jpg/wordpress.jpg';
import prestaShop from '../../../Assets/img/jpg/prestashop-1-7.jpg';
import cssGrid from '../../../Assets/img/jpg/css-grid.jpg';

import './HomeCourses.scss';

const HomeCourses = () => {
	return (
		<Row className='home-courses'>
			<Col lg={24} className='home-courses__title'>
				<h2>Aprende y mejora tus habilidades</h2>
			</Col>
			<Col lg={4} />
			<Col lg={16}></Col>
			<Col lg={4} />
		</Row>
	);
};

export default HomeCourses;
