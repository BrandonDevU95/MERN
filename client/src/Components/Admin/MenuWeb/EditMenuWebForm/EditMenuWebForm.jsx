import React, { useState, useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { LinkOutlined, FontSizeOutlined } from '@ant-design/icons';
import { updateMenuApi } from '../../../../API/menu';
import { getAccessTokenApi } from '../../../../API/auth';

import './EditMenuWebForm.scss';

const EditMenuWebForm = (props) => {
	const { setIsVisibleModal, setReloadMenuWeb, menu } = props;
	const [menuWebData, setMenuWebData] = useState(menu);

	useEffect(() => {
		setMenuWebData(menu);
	}, [menu]);

	const editMenu = (event) => {
		if (!menuWebData.title || !menuWebData.url) {
			notification['error']({
				message: 'Todos los campos son obligatorios',
			});
		} else {
			const accesToken = getAccessTokenApi();

			updateMenuApi(accesToken, menuWebData._id, menuWebData)
				.then((response) => {
					notification['success']({
						message: response,
					});
					setIsVisibleModal(false);
					setReloadMenuWeb(true);
				})
				.catch(() => {
					notification['error']({
						message: 'Error del servidor',
					});
				});
		}
	};

	return (
		<div className='edit-menu-web-form'>
			<EditForm
				menuWebData={menuWebData}
				setMenuWebData={setMenuWebData}
				editMenu={editMenu}
			/>
		</div>
	);
};

export default EditMenuWebForm;

function EditForm(props) {
	const { menuWebData, setMenuWebData, editMenu } = props;

	return (
		<Form className='form-edit' onFinish={editMenu}>
			<Form.Item>
				<Input
					prefix={<FontSizeOutlined />}
					className='icon-input'
					placeholder='Titulo'
					value={menuWebData.title}
					onChange={(e) =>
						setMenuWebData({ ...menuWebData, title: e.target.value })
					}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<LinkOutlined className='icon-input' />}
					placeholder='URL'
					value={menuWebData.url}
					onChange={(e) =>
						setMenuWebData({ ...menuWebData, url: e.target.value })
					}
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' className='btn-submit'>
					Actualizar Menu
				</Button>
			</Form.Item>
		</Form>
	);
}
