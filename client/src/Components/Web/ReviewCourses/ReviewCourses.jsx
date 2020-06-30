import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import AvatarPersona from '../../../Assets/img/png/cat.jpg';

import './ReviewCourses.scss';

const ReviewCourses = () => {
	return (
		<Row className='review-courses'>
			<Row>
				<Col lg={4} />
				<Col lg={16} className='review-courses__title'>
					<h2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptates.
					</h2>
				</Col>
				<Col lg={4} />
			</Row>
			<Row>
				<Col lg={4} />
				<Col lg={16}>
					<Row className='row-cards'>
						<Col md={8}>
							<CardReview
								name='Brennan'
								subtitle='Alumno Udemy'
								avatar={AvatarPersona}
								review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quas?'
							/>
						</Col>
						<Col md={8}>
							<CardReview
								name='Raven'
								subtitle='Alumno Udemy'
								avatar={AvatarPersona}
								review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quas?'
							/>
						</Col>
						<Col md={8}>
							<CardReview
								name='Jamaal'
								subtitle='Alumno Udemy'
								avatar={AvatarPersona}
								review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quas?'
							/>
						</Col>
					</Row>
					<Row className='row-cards'>
						<Col md={8}>
							<CardReview
								name='Camren'
								subtitle='Alumno Udemy'
								avatar={AvatarPersona}
								review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quas?'
							/>
						</Col>
						<Col md={8}>
							<CardReview
								name='Uriel'
								subtitle='Alumno Udemy'
								avatar={AvatarPersona}
								review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quas?'
							/>
						</Col>
						<Col md={8}>
							<CardReview
								name='Shaylee'
								subtitle='Alumno Udemy'
								avatar={AvatarPersona}
								review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quas?'
							/>
						</Col>
					</Row>
				</Col>
				<Col lg={4} />
			</Row>
		</Row>
	);
};

export default ReviewCourses;

function CardReview(props) {
	const { name, subtitle, avatar, review } = props;
	const { Meta } = Card;

	return (
		<Card className='review-courses__card'>
			<p>{review}</p>
			<Meta
				avatar={<Avatar src={avatar} />}
				title={name}
				description={subtitle}
			/>
		</Card>
	);
}
