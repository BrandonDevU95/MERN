import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../API/auth';
import { getUsersActiveApi } from '../../../API/user';
import './Users.scss';

const Users = () => {
	const [usersActive, setUsersActive] = useState([]);
	const [usersInactive, setUsersInactive] = useState([]);
	const token = getAccessTokenApi();

	console.log(usersActive);
	console.log(usersInactive);

	useEffect(() => {
		getUsersActiveApi(token, true).then((response) => {
			setUsersActive(response);
		});
		getUsersActiveApi(token, false).then((response) => {
			setUsersInactive(response);
		});
	}, [token]);
	return (
		<div>
			<h1>Estamos en Users ...</h1>
		</div>
	);
};

export default Users;
