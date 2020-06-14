import React from 'react';
import { Layout } from 'antd';
import {Route} from 'react-router-dom'
import './_Admin.scss'

const _Admin = (props) => {

	const {routes} = props
	const {Header, Content, Footer} = Layout;


	return (
		<Layout>
			<h2>Menu Slider Admin</h2>
			<Layout>
				<Header>Header...</Header>
				<Content>
					<LoadRoutes routes={routes}/>
				</Content>
				<Footer>Brandon Vargas </Footer> 
			</Layout>
		</Layout>
	);
};

function LoadRoutes ({routes}) {

	return routes.map((route, index) => (
		<Route key={index} path={route.path} exact={route.exact} component={route.component} />
	))
}

export default _Admin;
