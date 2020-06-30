import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './NewsLetter.scss';

const NewsLetter = () => {
	const newsLetter = () => {
		console.log('correo ok');
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
						// value={}
						// onChange={}
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
