import React, { useState } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
import Modal from '../../../Modal';
import NoAvatar from '../../../../Assets/img/png/no-avatar.png';
import {
	EditOutlined,
	StopOutlined,
	DeleteOutlined,
	CheckOutlined,
} from '@ant-design/icons';

import './ListUsers.scss';

const ListUsers = (props) => {
	const { usersActive, usersInactive } = props;
	const [viewUsersActive, setViewUsersActive] = useState(true);

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
					<UsersActive usersActive={usersActive} />
				) : (
					<UsersInactive usersInactive={usersInactive} />
				)}
				<Modal
					title='Mi modal'
					isVisible={true}
					setIsVisible={() => console.log('Algo')}
				>
					Hola este es mi primer modal
				</Modal>
			</div>
		</div>
	);
};

export default ListUsers;

function UsersActive(props) {
	const { usersActive } = props;

	return (
		<List
			className='users-active'
			itemLayout='horizontal'
			dataSource={usersActive}
			renderItem={(user) => (
				<List.Item
					actions={[
						<Button
							type='primary'
							onClick={() => console.log('Editar usuario')}
						>
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
						avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
						title={`
							${user.name ? user.name : '...'}
							${user.lastname ? user.lastname : '...'}							
						`}
						description={user.email}
					/>
				</List.Item>
			)}
		/>
	);
}

function UsersInactive(props) {
	const { usersInactive } = props;
	return (
		<List
			className='users-active'
			itemLayout='horizontal'
			dataSource={usersInactive}
			renderItem={(user) => (
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
						avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
						title={`
							${user.name ? user.name : '...'}
							${user.lastname ? user.lastname : '...'}							
						`}
						description={user.email}
					/>
				</List.Item>
			)}
		/>
	);
}
