import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../API/auth';
import { getUsersApi } from '../../../API/user';
import './Users.scss';

const Users = () => {
	const [users, setUsers] = useState([]);
	const token = getAccessTokenApi();

	useEffect(() => {
		getUsersApi(token).then((response) => {
			setUsers(response);
		});
	}, [token]);
	return (
		<div>
			<h1>Estamos en Users ...</h1>
		</div>
	);
};

export default Users;
