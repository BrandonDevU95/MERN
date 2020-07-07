import React, { useState, useEffect } from 'react';
import { Spin, List, notification } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import queryString from 'query-string';
import Pagination from '../../../Pagination';
import { getPostsApi } from '../../../../API/Post';
import 'moment/locale/es';

import './PostListWeb.scss';

const PostListWeb = (props) => {
	const { location, history } = props;
	const [posts, setPosts] = useState(null);
	const { page = 1 } = queryString.parse(location.search);

	useEffect(() => {
		getPostsApi(12, page)
			.then((response) => {
				if (response?.code !== 200) {
					notification['warning']({
						message: response.message,
					});
				} else {
					setPosts(response.posts);
				}
			})
			.catch(() => {
				notification['error']({
					message: 'Error del servidor',
				});
			});
	}, [page]);

	return (
		<div>
			<h1>Lorem ipsum dolor sit.</h1>
		</div>
	);
};

export default PostListWeb;
