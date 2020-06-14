import React, { useState } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './_Admin.scss';
import MenuTop from '../Components/Admin/MenuTop';
import MenuSider from '../Components/Admin/MenuSider';

const _Admin = (props) => {
	const { routes } = props;

	const [menuCollapsed, setMenuCollapsed] = useState(false);
	const { Header, Content, Footer } = Layout;

	return (
		<Layout>
			<MenuSider menuCollapsed={menuCollapsed} />
			<Layout
				className='layout-admin'
				style={{ marginLeft: menuCollapsed ? '80px' : '200px' }}
			>
				<Header className='layout-admin__header '>
					<MenuTop
						menuCollapsed={menuCollapsed}
						setMenuCollapsed={setMenuCollapsed}
					/>
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
