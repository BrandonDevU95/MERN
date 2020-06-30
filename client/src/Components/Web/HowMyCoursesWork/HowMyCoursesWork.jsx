import React from 'react';
import { Row, Col, Card } from 'antd';
import {
	ClockCircleOutlined,
	KeyOutlined,
	MessageOutlined,
	DollarOutlined,
	UserOutlined,
	CheckCircleOutlined,
} from '@ant-design/icons';

import './HowMyCoursesWork.scss';

const HowMyCoursesWork = () => {
	return (
		<Row className='how-my-courses-work'>
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
					<Col md={8}>
						<CardInfo
							icon={<ClockCircleOutlined />}
							title='Cursos y clases'
							subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit neque non ut praesentium enim cum?'
						/>
					</Col>
					<Col md={8}>
						<CardInfo
							icon={<KeyOutlined />}
							title='Acceso 24/7'
							subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit neque non ut praesentium enim cum?'
						/>
					</Col>
					<Col md={8}>
						<CardInfo
							icon={<MessageOutlined />}
							title='Aprendizaje Colaborativo'
							subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit neque non ut praesentium enim cum?'
						/>
					</Col>
				</Row>
				<Row className='row-cards'>
					<Col md={8}>
						<CardInfo
							icon={<UserOutlined />}
							title='Mejora tu perfil'
							subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit neque non ut praesentium enim cum?'
						/>
					</Col>
					<Col md={8}>
						<CardInfo
							icon={<DollarOutlined />}
							title='Precios Bajos'
							subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit neque non ut praesentium enim cum?'
						/>
					</Col>
					<Col md={8}>
						<CardInfo
							icon={<CheckCircleOutlined />}
							title='Certificado de Finalizacion'
							subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit neque non ut praesentium enim cum?'
						/>
					</Col>
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

	return (
		<Card className='how-my-courses-work__card'>
			{icon}
			<Meta title={title} description={subtitle} />
		</Card>
	);
}
