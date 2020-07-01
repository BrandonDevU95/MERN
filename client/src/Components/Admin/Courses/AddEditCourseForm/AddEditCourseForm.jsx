import React, { useEffect, useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { KeyOutlined, GiftOutlined, DollarOutlined } from '@ant-design/icons';
import { getAccessTokenApi } from '../../../../API/auth';

import './AddEditCourseForm.scss';

const AddEditCourseForm = (props) => {
	const { setIsVisibleModal, setReloadCourses, course } = props;
	const [courseData, setCourseData] = useState({});

	return (
		<div className='add-edit-course-form'>
			<AddEditForm course={course} />
		</div>
	);
};

export default AddEditCourseForm;

function AddEditForm(props) {
	const { course } = props;
	return (
		<Form
			className='form-add-edit'
			onFinish={() => console.log('Submit....')}
		>
			<Form.Item>
				<Input
					prefix={<KeyOutlined />}
					placeholder='Id del Curso'
					// value={}
					// onChange={}
					disabled={course ? true : false}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<GiftOutlined />}
					placeholder='Cupon de Descuento'
					// value={}
					// onChange={}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<DollarOutlined />}
					placeholder='Precio del Curso'
					// value={}
					// onChange={}
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' className='btn-submit'>
					{course ? 'Actualizar Curso' : 'Crear Curso'}
				</Button>
			</Form.Item>
		</Form>
	);
}
