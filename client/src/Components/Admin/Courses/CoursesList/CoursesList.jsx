import React, { useState, useEffect } from 'react';
import { List, Button, Modal as ModalAntd, notification } from 'antd';
import DragSortableList from 'react-drag-sortable';
import Modal from '../../../Modal';
import {} from '@ant-design/icons';
import { getCourseDataUdemyApi } from '../../../../API/courses';

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
				content: <Course course={course} />,
			});
		});
		setListCourses(listCourseArray);
	}, [courses]);

	const onSort = (sortedList, dropEvent) => {
		console.log(sortedList);
	};

	return (
		<div className='courses-list'>
			<div className='courses-list__header'>
				<Button type='primary'>Nuevo Curso</Button>
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
		</div>
	);
};

export default CoursesList;

function Course(props) {
	const { course } = props;
	return <h1>Lorem ipsum dolor sit amet.</h1>;
}
