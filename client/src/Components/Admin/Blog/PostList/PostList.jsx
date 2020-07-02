import React from 'react';
import { List, Button, Modal, notification } from 'antd';
import { Link } from 'react-router-dom';
import { getAccessTokenApi } from '../../../../API/auth';
import { deletePostApi } from '../../../../API/Post';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import './PostList.scss';

const { confirm } = Modal;

const PostList = (props) => {
	const { posts, setReloadPosts } = props;

	const deletePost = (post) => {
		const accesToken = getAccessTokenApi();

		confirm({
			title: 'Eliminar Post',
			content: `¿Esta seguro de eliminar el post ${post.title}?`,
			okText: 'Eliminar',
			okType: 'danger',
			cancelText: 'Cancelar',
			onOk() {
				deletePostApi(accesToken, post._id)
					.then((response) => {
						const typeNotification =
							response.code === 200 ? 'success' : 'warning';
						notification[typeNotification]({
							message: response.message,
						});
						setReloadPosts(true);
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
		<div className='post-list'>
			<List
				dataSource={posts.docs}
				renderItem={(post) => <Post post={post} deletePost={deletePost} />}
			/>
		</div>
	);
};

export default PostList;

function Post(props) {
	const { post, deletePost } = props;

	return (
		<List.Item
			actions={[
				<Link to={`/blog/${post.url}`} target='_blank'>
					<Button type='primary'>
						<EyeOutlined />
					</Button>
				</Link>,
				<Button type='primary'>
					<EditOutlined />
				</Button>,
				<Button type='danger' onClick={() => deletePost(post)}>
					<DeleteOutlined />
				</Button>,
			]}
		>
			<List.Item.Meta title={post.title} />
		</List.Item>
	);
}
