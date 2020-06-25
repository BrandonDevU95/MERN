import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { LinkOutlined, FontSizeOutlined } from '@ant-design/icons';
import { updateMenuApi } from '../../../../API/menu';
import { getAccessTokenApi } from '../../../../API/auth';

import './EditMenuWebForm.scss';

const EditMenuWebForm = (props) => {
	const { setIsVisibleModal, setReloadMenuWeb, menu } = props;
	return (
		<div className='edit-menu-web-form'>
			<EditForm />
		</div>
	);
};

export default EditMenuWebForm;

function EditForm(props) {
	const { menuWebData, setMenuWebData, editMenu, menu } = props;

	return (
		<Form className='form-edit'>
			<Form.Item>
				<Input
					prefix={<FontSizeOutlined className='icon-input' />}
					placeholder='Titulo'
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<LinkOutlined className='icon-input' />}
					placeholder='URL'
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
