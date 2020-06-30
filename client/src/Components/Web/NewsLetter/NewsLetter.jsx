import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { suscribeNewsletterApi } from '../../../API/newsletter';

import './NewsLetter.scss';

const NewsLetter = () => {
	const [email, setEmail] = useState('');
	const newsLetter = () => {
		/* eslint-disable */
		const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		const resultValidation = emailValid.test(email);
		if (!resultValidation) {
			notification['error']({
				message: 'Correo no valido',
			});
		} else {
			suscribeNewsletterApi(email).then((response) => {
				if (response.code !== 200) {
					notification['error']({
						message: response.message,
					});
				} else {
					notification['success']({
						message: response.message,
					});
					setEmail('');
				}
			});
		}
	};

	return (
		<div className='newsletter'>
			<h3>NewsLetter</h3>
			<Form onFinish={newsLetter}>
				<Form.Item>
					<Input
						prefix={<UserOutlined />}
						style={{ color: 'rgba(0,0,0,0.25)' }}
						placeholder='Correo'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='login-form-button'
					>
						Suscribir
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default NewsLetter;
