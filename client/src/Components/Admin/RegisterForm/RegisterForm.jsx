import React from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './RegisterForm.scss';

const RegisterForm = () => {
	return (
		<Form className='register-form'>
			<Form.Item>
				<Input
					type='email'
					name='email'
					placeholder='Correo electronico'
					className='register-form__input'
					prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} className='icon-input' />}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					type='password'
					name='password'
					placeholder='Contraseña'
					className='register-form__input'
					prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} className='icon-input' />}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					type='password'
					name='repeatPassword'
					placeholder='Repetir Contraseña'
					className='register-form__input'
					prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} className='icon-input' />}
				/>
			</Form.Item>
			<Form.Item>
				<Checkbox name='privacyPolicy' >
					He leido y acepto la politica de privacidad.
				</Checkbox>
			</Form.Item>
			<Form.Item>
				<Button htmlType='submit' className='register-form__button'>
					Crear cuenta
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegisterForm;
