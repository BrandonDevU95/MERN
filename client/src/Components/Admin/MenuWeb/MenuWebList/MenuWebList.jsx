import React, { useState, useEffect } from 'react';
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import {} from '@ant-design/icons';
import Modal from '../../../Modal';
import DragSortableList from 'react-drag-sortable';

import './MenuWebList';

const { confirm } = ModalAntd;

const MenuWebList = (props) => {
	const { menu, setReloadMenuWeb } = props;
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('');

	useEffect(() => {
		const listItemsArray = [];

		menu.forEach((item) => {
			listItemsArray.push({
				content: (
					<div>
						<p>{listItemsArray.title}</p>
					</div>
				),
			});
		});
		setList;
	}, [menu]);

	const onSort = (sortedList, dropEvent) => {};

	return (
		<div className='menu-web-list'>
			<div className='menu-web-list__header'>
				<Button type='primary'>Menu</Button>
			</div>
			<div className='menu-web-list__items'>
				<DragSortableList />
			</div>
		</div>
	);
};

export default MenuWebList;
