import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './_Admin.scss';

const _Admin = (props) => {
	const { routes } = props;
	const { Header, Content, Footer } = Layout;

	return (
		<Layout>
			{/* TODO: Menu Slider*/}
			<Layout className='layout-admin'>
				<Header className='layout-admin__header '>
					{/* TODO: Menu Top */}
				</Header>
				<Content className='layout-admin__content'>
					<LoadRoutes routes={routes} />
				</Content>
				<Footer className='layout-admin__footer'>Brandon Vargas </Footer>
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

export default _Admin;
