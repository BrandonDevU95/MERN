import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../API/auth';
import { getUsersActiveApi } from '../../../API/user';
import ListUsers from '../../../Components/Admin/Users/ListUsers';

import './Users.scss';

const Users = () => {
	const [usersActive, setUsersActive] = useState([]);
	const [usersInactive, setUsersInactive] = useState([]);
	const token = getAccessTokenApi();

	useEffect(() => {
		getUsersActiveApi(token, true).then((response) => {
			setUsersActive(response);
		});
		getUsersActiveApi(token, false).then((response) => {
			setUsersInactive(response);
		});
	}, [token]);
	return (
		<div className='users'>
			<ListUsers usersActive={usersActive} usersInactive={usersInactive} />
		</div>
	);
};

export default Users;
