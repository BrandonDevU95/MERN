import React from 'react';
import { Row, Col } from 'antd';
import {
	BookOutlined,
	CodeOutlined,
	DatabaseOutlined,
	RightOutlined,
	HddOutlined,
	AppstoreOutlined,
	UserOutlined,
} from '@ant-design/icons';

import './NavigationFooter.scss';

const NavigationFooter = () => {
	return (
		<Row className='navigation-footer'>
			<Col md={24}>
				<h3>Navegacion</h3>
			</Col>
			<Col md={12}>
				<RenderListLeft />
			</Col>
			<Col md={12}>
				<RenderListRight />
			</Col>
		</Row>
	);
};

export default NavigationFooter;

function RenderListLeft() {
	return (
		<ul>
			<li>
				<a href='#'>
					<BookOutlined />
					Cursos Online
				</a>
			</li>
			<li>
				<a href='#'>
					<CodeOutlined />
					Desarrollo Web
				</a>
			</li>
			<li>
				<a href='#'>
					<DatabaseOutlined />
					Cursos Online
				</a>
			</li>
			<li>
				<a href='#'>
					<RightOutlined />
					Politicas de Privacidad
				</a>
			</li>
		</ul>
	);
}

function RenderListRight() {
	return (
		<ul>
			<li>
				<a href='#'>
					<HddOutlined />
					Sistemas - Servidores
				</a>
			</li>
			<li>
				<a href='#'>
					<AppstoreOutlined />
					CMS
				</a>
			</li>
			<li>
				<a href='#'>
					<UserOutlined />
					Portafolio
				</a>
			</li>
			<li>
				<a href='#'>
					<RightOutlined />
					Politicas de Coockies
				</a>
			</li>
		</ul>
	);
}

//Para links internos
{
	/* <Link to='/contact'>
	<CodeOutlined />
	Desarrollo Web
</Link>; */
}
