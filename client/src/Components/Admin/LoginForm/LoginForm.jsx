import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.scss';

const LoginForm = () => {
	return (
		<Form>
			<Form.Item>
				<Input
					prefix={
						<UserOutlined
							style={{ color: 'rgba(0,0,0,0.25)' }}
							className='icon-input'
						/>
					}
					type='email'
					name='email'
					placeholder='Correo electronico'
					className='login-form__input'
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={
						<LockOutlined
							style={{ color: 'rgba(0,0,0,0.25)' }}
							className='icon-input'
						/>
					}
					type='password'
					name='password'
					placeholder='Contraseña'
					className='login-form__input'
				/>
			</Form.Item>
			<Form.Item>
				<Button htmlType='submit' className='login-form__button'>
					Entrar
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
