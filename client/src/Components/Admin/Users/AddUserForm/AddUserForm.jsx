import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, notification } from 'antd';
import {} from '@ant-design/icons';
import { signUpAdminApi } from '../../../../API/user';
import { getAccessTokenApi } from '../../../../API/auth';

import './AddUserForm.scss';

const AddUserForm = (props) => {
	const { setIsVisibleModal, setReloadUsers } = props;
	const [userData, setUserData] = useState({});

	const addUser = (event) => {
		console.log('Creando Usuario');
	};

	return (
		<div className='add-user-form'>
			<AddForm
				userData={userData}
				setUserData={setUserData}
				addUser={addUser}
			/>
		</div>
	);
};

export default AddUserForm;

function AddForm(props) {
	const { userData, setUserData, addUser } = props;
	const { Option } = Select;

	return (
		<Form className='form-add' onSubmit={addUser}>
			<Row gutter={24}></Row>
		</Form>
	);
}
