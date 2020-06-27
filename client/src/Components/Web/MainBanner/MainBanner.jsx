import React from 'react';
import { Row, Col } from 'antd';

import './MainBanner.scss';

const MainBanner = () => {
	return (
		<div className='main-banner'>
			<div className='main-banner__dark'></div>
			<Row>
				<Col md={4} />
				<Col md={16}>
					<h2>
						Aprende nuevas <br /> Tecnologias Web y movil
					</h2>
					<h3>
						A traves de cursos practicos, concisos y actualizados creados
						por <br /> profecionales con años de experiencia
					</h3>
				</Col>
				<Col md={4} />
			</Row>
		</div>
	);
};

export default MainBanner;
