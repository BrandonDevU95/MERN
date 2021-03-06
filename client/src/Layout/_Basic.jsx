import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import MenuTop from '../Components/Web/MenuTop';
import Footer from '../Components/Web/Footer';

import './_Basic.scss';

const _Basic = (props) => {
	const { routes } = props;

	return (
		<Fragment>
			<Row>
				<Col lg={4} />
				<Col lg={16}>
					<MenuTop />
				</Col>
				<Col lg={4} />
			</Row>
			<LoadRoutes routes={routes} />
			<Footer />
		</Fragment>
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
