import React, { useState } from 'react';
import { Switch, List, Avatar, Button } from 'antd';
import {} from '@ant-design/icons';
import NoAvatar from '../../../../Assets/img/png/no-avatar.png';

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
				<span>{viewUsersActive ? <UsersActive /> : <UsersInactive />}</span>
			</div>
		</div>
	);
};

export default ListUsers;

function UsersActive() {
	return <h3>Lista de usuarios Activos</h3>;
}

function UsersInactive() {
	return <h3>Lista de usuarios Inactivos</h3>;
}
