import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import {
	Avatar,
	Form,
	Input,
	Select,
	Button,
	Row,
	Col,
	notification,
} from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import NoAvatar from '../../../../Assets/img/png/no-avatar.png';
import {
	getAvatarApi,
	uploadAvatarApi,
	updateUserApi,
} from '../../../../API/user';
import { getAccessTokenApi } from '../../../../API/auth';

import './EditUserForm.scss';

const EditUserForm = (props) => {
	const { user, setIsVisibleModal, setReloadUsers } = props;
	const [avatar, setAvatar] = useState(null);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		setUserData({
			name: user.name,
			lastname: user.lastname,
			email: user.email,
			role: user.role,
			avatar: user.avatar,
		});
	}, [user]);

	useEffect(() => {
		if (user.avatar) {
			getAvatarApi(user.avatar).then((response) => {
				setAvatar(response);
			});
		} else {
			setAvatar(null);
		}
	}, [user]);

	useEffect(() => {
		if (avatar) {
			setUserData({ ...userData, avatar: avatar.file });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [avatar]);

	const updateUser = (e) => {
		const token = getAccessTokenApi();
		let userUpdate = userData;

		if (userUpdate.password || userUpdate.repeatPassword) {
			if (userUpdate.password !== userUpdate.repeatPassword) {
				notification['error']({
					message: 'Las contraseñas deben ser iguales',
				});
			}
			return;
		}

		if (!userUpdate.name || !userUpdate.lastname || !userUpdate.email) {
			notification['error']({
				message: 'Los campos nombre, apellidos y email son obligatorios',
			});
			return;
		}

		if (typeof userUpdate.avatar === 'object') {
			uploadAvatarApi(token, userUpdate.avatar, user._id).then(
				(response) => {
					userUpdate.avatar = response.avatarName;
					updateUserApi(token, userUpdate, user._id).then((result) => {
						notification['success']({
							message: result.message,
						});
						setIsVisibleModal(false);
						setReloadUsers(true);
					});
				}
			);
		} else {
			updateUserApi(token, userUpdate, user._id).then((result) => {
				notification['success']({
					message: result.message,
				});
				setIsVisibleModal(false);
				setReloadUsers(true);
			});
		}
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
	const [avatarUrl, setAvatarUrl] = useState(null);

	useEffect(() => {
		if (avatar) {
			if (avatar.preview) {
				setAvatarUrl(avatar.preview);
			} else {
				setAvatarUrl(avatar);
			}
		} else {
			setAvatarUrl(null);
		}
	}, [avatar]);

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
				<Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar} />
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
							value={userData.name}
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
							value={userData.lastname}
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
							value={userData.email}
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
							value={userData.role}
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
