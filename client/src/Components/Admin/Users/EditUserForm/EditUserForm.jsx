import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Avatar, Form, Input, Select, Button, Row, Col } from 'antd';
import {} from '@ant-design/icons';
import NoAvatar from '../../../../Assets/img/png/no-avatar.png';

import './EditUserForm.scss';

const EditUserForm = (props) => {
	const { user } = props;
	const [avatar, setAvatar] = useState(null);

	return (
		<div>
			<UploadAvatar avatar={avatar} setAvatar={setAvatar} />
			<h2>{user.email}</h2>
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
