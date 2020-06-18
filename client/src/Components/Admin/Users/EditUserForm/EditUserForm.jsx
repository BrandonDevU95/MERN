import React from 'react';

import './EditUserForm.scss';

const EditUserForm = (props) => {
	const { user } = props;

	return (
		<div>
			<h1>Formulario edicionUsuario</h1>
			<h2>{user.email}</h2>
		</div>
	);
};

export default EditUserForm;
