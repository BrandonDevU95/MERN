import React from 'react';
import { Row, Col, Card } from 'antd';

import './HowMyCoursesWork.scss';

const HowMyCoursesWork = () => {
	return (
		<Row>
			<Col lg={24} className='how-my-courses-work__title'>
				<h2>¿Como funcionan mis cursos?</h2>
				<h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
					rem neque mollitia id consequatur quo reprehenderit? Cumque
					eveniet praesentium ratione?
				</h3>
			</Col>
			<Col lg={4} />
			<Col lg={16}>
				<Row className='row-cards'>
					<Col md={8}></Col>
				</Row>
			</Col>
			<Col lg={4} />
		</Row>
	);
};

export default HowMyCoursesWork;

function CardInfo(props) {
	const { icon, title, subtitle } = props;
	const { Meta } = Card;
}
