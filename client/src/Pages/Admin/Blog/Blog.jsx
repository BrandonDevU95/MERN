import React, { useState, useEffect } from 'react';
import { Button, notification } from 'antd';
import Modal from '../../../Components/Modal';

import './Blog.scss';

const Blog = () => {
	const [modalTitle, setModaltitle] = useState('');
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	return (
		<div className='blog'>
			<div className='blog__add-post'>
				<Button type='primary'>Nuevo Post</Button>
			</div>
			<h1>Post List...</h1>
			<h2>Paginacion...</h2>

			<Modal
				title={modalTitle}
				isVisible={isVisibleModal}
				setIsVisible={setIsVisibleModal}
				width='75%'
			/>
		</div>
	);
};

export default Blog;
