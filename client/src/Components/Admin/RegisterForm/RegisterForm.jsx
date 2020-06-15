import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './RegisterForm.scss';

const RegisterForm = () => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		privacyPolicy: false,
	});

	const changeForm = (e) => {
		if (e.target.name === 'privacyPolicy') {
			setInputs({
				...inputs,
				[e.target.name]: e.target.checked,
			});
		} else {
			setInputs({
				...inputs,
				[e.target.name]: e.target.value,
			});
		}
	};

	const register = e => {
		// e.preventDefault();
		console.log(inputs);
	};

	return (
		<Form className='register-form' onFinish={register} onChange={changeForm}>
			<Form.Item>
				<Input
					type='email'
					name='email'
					placeholder='Correo electronico'
					className='register-form__input'
					prefix={
						<UserOutlined
							style={{ color: 'rgba(0,0,0,.25)' }}
							className='icon-input'
						/>
					}
					value={inputs.email}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					type='password'
					name='password'
					placeholder='Contraseña'
					className='register-form__input'
					prefix={
						<LockOutlined
							style={{ color: 'rgba(0,0,0,.25)' }}
							className='icon-input'
						/>
					}
					value={inputs.password}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					type='password'
					name='repeatPassword'
					placeholder='Repetir Contraseña'
					className='register-form__input'
					prefix={
						<LockOutlined
							style={{ color: 'rgba(0,0,0,.25)' }}
							className='icon-input'
						/>
					}
					value={inputs.repeatPassword}
				/>
			</Form.Item>
			<Form.Item>
				<Checkbox name='privacyPolicy' checked={inputs.privacyPolicy}>
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
