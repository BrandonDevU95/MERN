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
			<Col lg={16}>
				<Row className='row-courses'>
					<Col md={6}>
						<CardCourse
							image={reactJsHooks}
							title='React JS Hooks'
							subtitle='Intermedio Reatc/Java'
							link='#'
						/>
					</Col>
					<Col md={6}>
						<CardCourse
							image={rectNative}
							title='React Native Expo'
							subtitle='Intermedio Reatc/Java'
							link='#'
						/>
					</Col>
					<Col md={6}>
						<CardCourse
							image={javaScript}
							title='JavaScript ES6'
							subtitle='Basico JavaScript'
							link='#'
						/>
					</Col>
					<Col md={6}>
						<CardCourse
							image={wordPress}
							title='WordPress'
							subtitle='Basico WordPress'
							link='#'
						/>
					</Col>
				</Row>
				<Row className='row-courses'>
					<Col md={6}>
						<CardCourse
							image={prestaShop}
							title='PrestaShop'
							subtitle='Basico PrestaShop'
							link='#'
						/>
					</Col>
					<Col md={6} />
					<Col md={6} />
					<Col md={6}>
						<CardCourse
							image={cssGrid}
							title='CSS Grid'
							subtitle='Intermedio CSS'
							link='#'
						/>
					</Col>
				</Row>
			</Col>
			<Col lg={4} />
		</Row>
	);
};

export default HomeCourses;

function CardCourse(props) {
	const { image, title, subtitle, link } = props;
	const { Meta } = Card;

	return (
		<a href={link} target='_blank' rel='noopener noreferrer'>
			<Card
				className='home-courses__card'
				cover={<img src={image} alt={title} />}
				actions={[<Button>INGESAR</Button>]}
			>
				<Meta title={title} description={subtitle} />
			</Card>
		</a>
	);
}
