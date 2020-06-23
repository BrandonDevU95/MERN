import React, { useState, useEffect } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
import Modal from '../../../Modal';
import NoAvatar from '../../../../Assets/img/png/no-avatar.png';
import EditUserForm from '../EditUserForm';
import { getAvatarApi } from './../../../../API/user';
import {
	EditOutlined,
	StopOutlined,
	DeleteOutlined,
	CheckOutlined,
} from '@ant-design/icons';

import './ListUsers.scss';

const ListUsers = (props) => {
	const { usersActive, usersInactive, setReloadUsers } = props;
	const [viewUsersActive, setViewUsersActive] = useState(true);
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('');
	const [modalContent, steModalContent] = useState(null);

	return (
		<div className='list-users'>
			<div className='list-users__switch'>
				<Switch
					defaultChecked
					onChange={() => setViewUsersActive(!viewUsersActive)}
				/>
				<span>
					{viewUsersActive ? 'Usuarios Activos' : 'Usuarios Inactivos'}
				</span>
				{viewUsersActive ? (
					<UsersActive
						usersActive={usersActive}
						setIsVisibleModal={setIsVisibleModal}
						setModalTitle={setModalTitle}
						steModalContent={steModalContent}
						setReloadUsers={setReloadUsers}
					/>
				) : (
					<UsersInactive usersInactive={usersInactive} />
				)}
				<Modal
					title={modalTitle}
					isVisible={isVisibleModal}
					setIsVisible={setIsVisibleModal}
				>
					{modalContent}
				</Modal>
			</div>
		</div>
	);
};

export default ListUsers;

function UsersActive(props) {
	const {
		usersActive,
		setIsVisibleModal,
		setModalTitle,
		steModalContent,
		setReloadUsers,
	} = props;

	const editUser = (user) => {
		setIsVisibleModal(true);
		setModalTitle(
			`Editar ${user.name ? user.name : '...'} ${
				user.lastname ? user.lastname : '...'
			}`
		);
		steModalContent(
			<EditUserForm
				user={user}
				setIsVisibleModal={setIsVisibleModal}
				setReloadUsers={setReloadUsers}
			/>
		);
	};

	return (
		<List
			className='users-active'
			itemLayout='horizontal'
			dataSource={usersActive}
			renderItem={(user) => <UserActive user={user} editUser={editUser} />}
		/>
	);
}

function UserActive(props) {
	const { user, editUser } = props;
	const [avatar, setAvatar] = useState(null);

	useEffect(() => {
		if (user.avatar) {
			getAvatarApi(user.avatar).then((response) => {
				setAvatar(response);
			});
		} else {
			setAvatar(null);
		}
	}, [user]);

	return (
		<List.Item
			actions={[
				<Button type='primary' onClick={() => editUser(user)}>
					<EditOutlined />
				</Button>,
				<Button
					type='danger'
					onClick={() => console.log('Desactivar Usuario')}
				>
					<StopOutlined />
				</Button>,
				<Button
					type='danger'
					onClick={() => console.log('Eliminar Usuario')}
				>
					<DeleteOutlined />
				</Button>,
			]}
		>
			<List.Item.Meta
				avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
				title={`
							${user.name ? user.name : '...'}
							${user.lastname ? user.lastname : '...'}							
						`}
				description={user.email}
			/>
		</List.Item>
	);
}

function UsersInactive(props) {
	const { usersInactive } = props;
	return (
		<List
			className='users-active'
			itemLayout='horizontal'
			dataSource={usersInactive}
			renderItem={(user) => <UserInactive user={user} />}
		/>
	);
}

function UserInactive(props) {
	const { user } = props;
	const [avatar, setAvatar] = useState(null);

	useEffect(() => {
		if (user.avatar) {
			getAvatarApi(user.avatar).then((response) => {
				setAvatar(response);
			});
		} else {
			setAvatar(null);
		}
	}, [user]);

	return (
		<List.Item
			actions={[
				<Button
					type='primary'
					onClick={() => console.log('Activar usuario')}
				>
					<CheckOutlined />
				</Button>,
				<Button
					type='danger'
					onClick={() => console.log('Eliminar Usuario')}
				>
					<DeleteOutlined />
				</Button>,
			]}
		>
			<List.Item.Meta
				avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
				title={`
							${user.name ? user.name : '...'}
							${user.lastname ? user.lastname : '...'}							
						`}
				description={user.email}
			/>
		</List.Item>
	);
}
