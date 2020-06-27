import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import MenuTop from '../Components/Web/MenuTop';

import './_Basic.scss';

const _Basic = (props) => {
	const { routes } = props;
	const { Footer } = Layout;

	return (
		<Row>
			<Col lg={4} />
			<Col lg={16}>
				<MenuTop />
				<LoadRoutes routes={routes} />
				<Footer>Brandon Vargas</Footer>
			</Col>
			<Col lg={4} />
		</Row>
	);
};

function LoadRoutes({ routes }) {
	return (
		<Switch>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.component}
				/>
			))}
		</Switch>
	);
}

export default _Basic;
