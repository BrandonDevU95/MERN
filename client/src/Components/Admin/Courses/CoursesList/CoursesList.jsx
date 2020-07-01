import React, { useState, useEffect } from 'react';
import { List, Button, Modal as ModalAntd, notification } from 'antd';
import DragSortableList from 'react-drag-sortable';
import Modal from '../../../Modal';
import AddEditCourseForm from '../AddEditCourseForm';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAccessTokenApi } from '../../../../API/auth';
import {
	getCourseDataUdemyApi,
	deleteCourseApi,
} from '../../../../API/courses';

import './CoursesList.scss';

const { confirm } = ModalAntd;

const CoursesList = (props) => {
	const { courses, setReloadCourses } = props;
	const [listCourses, setListCourses] = useState([]);
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('');
	const [modalContent, setModalContent] = useState(null);

	useEffect(() => {
		const listCourseArray = [];
		courses.forEach((course) => {
			listCourseArray.push({
				content: (
					<Course
						course={course}
						deleteCourse={deleteCourse}
						editCourseModal={editCourseModal}
					/>
				),
			});
		});
		setListCourses(listCourseArray);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [courses]);

	const onSort = (sortedList, dropEvent) => {
		console.log(sortedList);
	};

	const addCourseModal = () => {
		setIsVisibleModal(true);
		setModalTitle('Creando Curso');
		setModalContent(
			<AddEditCourseForm
				setIsVisibleModal={setIsVisibleModal}
				setReloadCourses={setReloadCourses}
			/>
		);
	};

	const editCourseModal = (course) => {
		setIsVisibleModal(true);
		setModalTitle('Actializar Curso');
		setModalContent(
			<AddEditCourseForm
				setIsVisibleModal={setIsVisibleModal}
				setReloadCourses={setReloadCourses}
				course={course}
			/>
		);
	};

	const deleteCourse = (course) => {
		const accesToken = getAccessTokenApi();
		confirm({
			title: 'Eliminar Curso',
			content: `¿Estas seguro de eliminar ${course.idCourse}`,
			okText: 'Eliminar',
			okType: 'ganger',
			cancelText: 'Cancelar',
			onOk() {
				deleteCourseApi(accesToken, course._id)
					.then((response) => {
						const typeNotification =
							response.code === 200 ? 'success' : 'warning';
						notification[typeNotification]({
							message: response.message,
						});
						setReloadCourses(true);
					})
					.catch(() => {
						notification['error']({
							message: 'Error del servidor',
						});
					});
			},
		});
	};

	return (
		<div className='courses-list'>
			<div className='courses-list__header'>
				<Button type='primary' onClick={addCourseModal}>
					Nuevo Curso
				</Button>
			</div>
			<div className='courses-list__items'>
				{listCourses.length === 0 && (
					<h2 style={{ textAlign: 'center', margin: 0 }}>
						No tienes Cursos
					</h2>
				)}
				<DragSortableList
					items={listCourses}
					onSort={onSort}
					type='vertical'
				/>
			</div>
			<Modal
				title={modalTitle}
				isVisible={isVisibleModal}
				setIsVisible={setIsVisibleModal}
			>
				{modalContent}
			</Modal>
		</div>
	);
};

export default CoursesList;

function Course(props) {
	const { course, deleteCourse, editCourseModal } = props;
	const [courseData, setCourseData] = useState(null);

	useEffect(() => {
		getCourseDataUdemyApi(course.idCourse).then((response) => {
			if (response.code !== 200) {
				notification['error']({
					message: `El curso ${course.idCourse} no se encontro`,
				});
			}
			setCourseData(response.data);
		});
	}, [course]);

	if (!courseData) {
		return null;
	}

	return (
		<List.Item
			actions={[
				<Button type='primary'>
					<EditOutlined onClick={() => editCourseModal(course)} />
				</Button>,
				<Button type='danger' onClick={() => deleteCourse(course)}>
					<DeleteOutlined />
				</Button>,
			]}
		>
			<img
				src={courseData.image_480x270}
				alt={courseData.title}
				style={{ width: '100px', marginRight: '20px' }}
			/>
			<List.Item.Meta
				title={`${course.title} | ID: ${course.idCourse}`}
				description={courseData.headline}
			/>
		</List.Item>
	);
}
