import React, { useState, useEffect, Fragment } from 'react';
import { Spin, List, notification, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import queryString from 'query-string';
import Pagination from '../../../Pagination';
import { getPostsApi } from '../../../../API/Post';
import { Helmet } from 'react-helmet';
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

	if (!posts) {
		return (
			<Spin tip='Cargando' style={{ width: '100%', padding: '200px 0px' }} />
		);
	}

	return (
		<div className='post-list-web'>
			<h1>Blog</h1>
			<List
				dataSource={posts.docs}
				renderItem={(post) => <Post post={post} />}
			/>
			<Pagination posts={posts} location={location} history={history} />
		</div>
	);
};

export default PostListWeb;

function Post(props) {
	const { post } = props;
	const day = moment(post.date).format('DD');
	const month = moment(post.date).format('MMMM');
	return (
		<Fragment>
			<Helmet>
				<title>MUVA WEB DESIGN | Blog</title>
			</Helmet>
			<List.Item className='post'>
				<Row>
					<div className='post__date'>
						<span>{day}</span>
						<span>{month}</span>
					</div>
					<Link to={`blog/${post.url}`}>
						<List.Item.Meta title={post.title} />
					</Link>
				</Row>
			</List.Item>
		</Fragment>
	);
}
