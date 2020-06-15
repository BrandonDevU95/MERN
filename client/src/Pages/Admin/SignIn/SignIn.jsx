import React from 'react';
import { Layout, Tabs } from 'antd';
import { Redirect } from 'react-router-dom';
import Logo from '../../../Assets/img/png/muvalogo_clean.png';
import RegisterForm from '../../../Components/Admin/RegisterForm';
import './SignIn.scss';

const SignIn = () => {
	const { Content } = Layout;
	const { TabPane } = Tabs;

	return (
		<Layout className='sign-in'>
			<Content className='sign-in__content'>
				<h1 className='sign-in__content-logo'>
					<img src={Logo} alt='Brandon Vargas' />
				</h1>
				<div className='sign-in__content-tabs'>
					<Tabs type='card'>
						<TabPane tab={<span>Entrar</span>} key='1'>
							Componente Login
						</TabPane>
						<TabPane tab={<span>Nuevo Usuario</span>} key='2'>
							<RegisterForm />
						</TabPane>
					</Tabs>
				</div>
			</Content>
		</Layout>
	);
};

export default SignIn;