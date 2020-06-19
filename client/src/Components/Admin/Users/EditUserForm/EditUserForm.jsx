import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar, Form, Input, Select, Button, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import NoAvatar from '../../../../Assets/img/png/no-avatar.png';

import './EditUserForm.scss';

const EditUserForm = (props) => {
	const { user } = props;
	const [avatar, setAvatar] = useState(null);
	const [userData, setUserData] = useState({
		name: user.name,
		lastname: user.lastname,
		email: user.email,
		role: user.role,
		avatar: user.avatar,
	});

	const updateUser = (e) => {
		console.log(userData);
	};

	return (
		<div className='edit-user-form'>
			<UploadAvatar avatar={avatar} setAvatar={setAvatar} />
			<EditForm
				user={user}
				userData={userData}
				setUserData={setUserData}
				updateUser={updateUser}
			/>
		</div>
	);
};

export default EditUserForm;

function UploadAvatar(props) {
	const { avatar, setAvatar } = props;
	const onDrop = useCallback(
		(acceptedFiles) => {
			const file = acceptedFiles[0];
			setAvatar({ file, preview: URL.createObjectURL(file) });
		},
		[setAvatar]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/jpeg, image/png',
		noKeyboard: true,
		onDrop,
	});

	return (
		<div className='uploadAvatar' {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<Avatar size={150} src={NoAvatar} />
			) : (
				<Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />
			)}
		</div>
	);
}

function EditForm(props) {
	const { user, userData, setUserData, updateUser } = props;
	const { option } = Select;

	return (
		<Form className='form-edit' onFinish={updateUser}>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item>
						<Input
							prefix={<UserOutlined />}
							placeholder='Nombre'
							defaultValue={userData.name}
							onChange={(e) =>
								setUserData({ ...userData, name: e.target.value })
							}
						/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item>
						<Input
							prefix={<UserOutlined />}
							placeholder='Apellidos'
							defaultValue={userData.lastname}
							onChange={(e) =>
								setUserData({ ...userData, lastname: e.target.value })
							}
						/>
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item>
						<Input
							prefix={<MailOutlined />}
							placeholder='Correo'
							defaultValue={userData.email}
							onChange={(e) =>
								setUserData({ ...userData, email: e.target.value })
							}
						/>
					</Form.Item>
				</Col>
				<Col span={12}></Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}></Col>
				<Col span={12}></Col>
			</Row>
			<Form.Item>
				<Button type='primary' htmlType='submit' className='btn-submit'>
					Actualizar
				</Button>
			</Form.Item>
		</Form>
	);
}
