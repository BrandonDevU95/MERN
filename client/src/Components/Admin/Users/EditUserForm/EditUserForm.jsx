import React, { useState, useCallback, useEffect } from 'react';
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

	useEffect(() => {
		if (avatar) {
			setUserData({ ...userData, avatar });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [avatar]);

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
	const { Option } = Select;

	return (
		<Form className='form-edit' onFinish={updateUser}>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item>
						<Input
							prefix={<UserOutlined className='icon-input' />}
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
							prefix={<UserOutlined className='icon-input' />}
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
							prefix={<MailOutlined className='icon-input' />}
							placeholder='Correo'
							defaultValue={userData.email}
							onChange={(e) =>
								setUserData({ ...userData, email: e.target.value })
							}
						/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item>
						<Select
							placeholder='Selecciona un rol'
							onChange={(e) => setUserData({ ...userData, role: e })}
							defaultValue={userData.role}
						>
							<Option value='admin'>Administrador</Option>
							<Option value='editor'>Editor</Option>
							<Option value='reviewr'>Revisor</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item>
						<Input
							prefix={<LockOutlined className='icon-input' />}
							type='password'
							placeholder='Contraseña'
							onChange={(e) =>
								setUserData({ ...userData, password: e.target.value })
							}
						/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item>
						<Input
							prefix={<LockOutlined className='icon-input' />}
							type='password'
							placeholder='Repetir Contraseña'
							onChange={(e) =>
								setUserData({
									...userData,
									repeatPassword: e.target.value,
								})
							}
						/>
					</Form.Item>
				</Col>
			</Row>
			<Form.Item>
				<Button type='primary' htmlType='submit' className='btn-submit'>
					Actualizar
				</Button>
			</Form.Item>
		</Form>
	);
}
