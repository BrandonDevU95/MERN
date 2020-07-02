import React from 'react';
import { List, Button, Modal, notification } from 'antd';
import { Link } from 'react-router-dom';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import './PostList.scss';

const { confirm } = Modal;

const PostList = (props) => {
	const { posts } = props;

	return (
		<div className='post-list'>
			<List
				dataSource={posts.docs}
				renderItem={(post) => <Post post={post} />}
			/>
		</div>
	);
};

export default PostList;

function Post(props) {
	const { post } = props;

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
				<Button type='danger'>
					<DeleteOutlined />
				</Button>,
			]}
		>
			<List.Item.Meta title={post.title} />
		</List.Item>
	);
}
