import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
	emailValidation,
	minLengthValidation,
} from '../../../Utils/formValidation';
import './RegisterForm.scss';

const RegisterForm = () => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		privacyPolicy: false,
	});

	const [formValid, setFomrValid] = useState({
		email: false,
		password: false,
		repeatPassword: false,
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

	const inputValidation = (e) => {
		const { type, name } = e.target;

		if (type === 'email') {
			setFomrValid({
				...formValid,
				[name]: emailValidation(e.target),
			});
		}

		if (type === 'password') {
			setFomrValid({
				...formValid,
				[name]: minLengthValidation(e.target, 6)
			});
		}

		if (type === 'checkbox') {
			setFomrValid({
				...formValid,
				[name]: e.target.checked,
			});
		}
	};

	const register = (e) => {		
		console.log(formValid);
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
					onChange={inputValidation}
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
					onChange={inputValidation}
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
					onChange={inputValidation}
					value={inputs.repeatPassword}
				/>
			</Form.Item>
			<Form.Item>
				<Checkbox
					name='privacyPolicy'
					onChange={inputValidation}
					checked={inputs.privacyPolicy}
				>
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
