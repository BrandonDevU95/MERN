import React, { useEffect, useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import {
	KeyOutlined,
	GiftOutlined,
	DollarOutlined,
	LinkOutlined,
} from '@ant-design/icons';
import { getAccessTokenApi } from '../../../../API/auth';
import { addCourseApi, updateCourseApi } from '../../../../API/courses';

import './AddEditCourseForm.scss';

const AddEditCourseForm = (props) => {
	const { setIsVisibleModal, setReloadCourses, course } = props;
	const [courseData, setCourseData] = useState({});

	useEffect(() => {
		course && setCourseData(course);
	}, [course]);

	const addCourse = () => {
		if (!courseData.idCourse) {
			notification['error']({
				message: 'El ID es obligatorio',
			});
		} else {
			const accesToken = getAccessTokenApi();

			addCourseApi(accesToken, courseData)
				.then((response) => {
					const typeNotification =
						response.code === 200 ? 'success' : 'warning';
					notification[typeNotification]({
						message: response.message,
					});
					setIsVisibleModal(false);
					setReloadCourses(true);
					setCourseData({});
				})
				.catch(() => {
					notification['error']({
						message: 'Error del servidor',
					});
				});
		}
	};

	const updateCourse = () => {
		const accesToken = getAccessTokenApi();

		updateCourseApi(accesToken, course._id, courseData)
			.then((response) => {
				const typeNotification =
					response.code === 200 ? 'success' : 'warning';
				notification[typeNotification]({
					message: response.message,
				});
				setIsVisibleModal(false);
				setReloadCourses(true);
				setCourseData({});
			})
			.catch(() => {
				notification['error']({
					message: 'Error del Servidor',
				});
			});
	};

	return (
		<div className='add-edit-course-form'>
			<AddEditForm
				course={course}
				addCourse={addCourse}
				updateCourse={updateCourse}
				setCourseData={setCourseData}
				courseData={courseData}
			/>
		</div>
	);
};

export default AddEditCourseForm;

function AddEditForm(props) {
	const { course, addCourse, updateCourse, courseData, setCourseData } = props;
	return (
		<Form
			className='form-add-edit'
			onFinish={course ? updateCourse : addCourse}
		>
			<Form.Item>
				<Input
					prefix={<KeyOutlined />}
					placeholder='Id del Curso'
					value={courseData.idCourse}
					onChange={(e) =>
						setCourseData({ ...courseData, idCourse: e.target.value })
					}
					disabled={course ? true : false}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<LinkOutlined />}
					placeholder='URL del Curso'
					value={courseData.link}
					onChange={(e) =>
						setCourseData({ ...courseData, link: e.target.value })
					}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<GiftOutlined />}
					placeholder='Cupon de Descuento'
					value={courseData.coupon}
					onChange={(e) =>
						setCourseData({ ...courseData, coupon: e.target.value })
					}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<DollarOutlined />}
					placeholder='Precio del Curso'
					value={courseData.price}
					onChange={(e) =>
						setCourseData({ ...courseData, price: e.target.value })
					}
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
