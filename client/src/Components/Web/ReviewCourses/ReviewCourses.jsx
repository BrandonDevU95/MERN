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
							<CardReview />
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
