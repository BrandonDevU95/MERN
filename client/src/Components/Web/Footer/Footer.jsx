import React from 'react';
import { Layout, Row, Col } from 'antd';
import MyInfo from './MyInfo';
import NavigationFooter from './NavigationFooter';
import './Footer.scss';

const Footer = () => {
	const { Footer } = Layout;

	return (
		<Footer className='footer'>
			<Row>
				<Col lg={4} />
				<Col lg={16}>
					<Row>
						<Col md={8}>
							<MyInfo />
						</Col>
						<Col md={8}>
							<NavigationFooter />
						</Col>
						<Col md={8}>Newslatter</Col>
					</Row>
					<Row className='footer__copyright'>
						<Col md={12}>2019 ALL RIGHTS RESERVED</Col>
						<Col md={12}>BRANDON VARGAS FRIAS | DESARROLLADOR WEB</Col>
					</Row>
				</Col>
				<Col lg={4} />
			</Row>
		</Footer>
	);
};

export default Footer;
