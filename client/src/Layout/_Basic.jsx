import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './_Basic.scss';

const _Basic = (props) => {
	const { routes } = props;
	const { Content, Footer } = Layout;

	return (
		<Layout>
			<h2>Menu</h2>
			<Layout>
				<Content>
					<LoadRoutes routes={routes} />
				</Content>
				<Footer>Brandon Vargas</Footer>
			</Layout>
		</Layout>
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