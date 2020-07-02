import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, notification } from 'antd';
import Modal from '../../../Components/Modal';
import queryString from 'query-string';
import { getPostsApi } from '../../../API/Post';

import './Blog.scss';

const Blog = (props) => {
	const { location, history } = props;
	const [modalTitle, setModaltitle] = useState('');
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const { page = 1 } = queryString.parse(location.search);

	useEffect(() => {
		getPostsApi(12, page)
			.then((response) => {
				console.log(response);
			})
			.catch(() => {
				console.log('Error');
			});
	}, [page]);

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

export default withRouter(Blog);
