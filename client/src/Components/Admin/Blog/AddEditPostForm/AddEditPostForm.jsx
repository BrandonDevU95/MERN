import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, notification } from 'antd';
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';
import moment from 'moment';
import { getAccessTokenApi } from '../../../../API/auth';
import { Editor } from '@tinymce/tinymce-react';

import './AddEditPostForm.scss';

const AddEditPostForm = (props) => {
	const { setIsVisibleModal, setReloadPosts, post } = props;
	const [postData, setPostData] = useState({});

	useEffect(() => {
		if (post) {
			setPostData(post);
		} else {
			setPostData([]);
		}
	}, [post]);

	return (
		<div className='add-edit-post-form'>
			<AddEditForm
				postData={postData}
				setPostData={setPostData}
				post={post}
			/>
		</div>
	);
};

export default AddEditPostForm;

function AddEditForm(props) {
	const { postData, setPostData, post } = props;

	return (
		<Form className='add-edit-post-form' layout='inline'>
			<Row gutter={24}>
				<Col span={8}>
					<Input
						prefix={<FontSizeOutlined />}
						placeholder='Titulo'
						// value={}
						// onChange={}
					/>
				</Col>
				<Col span={8}>
					<Input
						prefix={<LinkOutlined />}
						placeholder='Titulo'
						// value={}
						// onChange={}
					/>
				</Col>
				<Col span={8}>
					<DatePicker
						style={{ width: '100%' }}
						format='DD/MM/YYYY HH:mm:ss'
						placeholder='Fecha de publicacion'
					/>
				</Col>
			</Row>
			<Editor
				value=''
				init={{
					height: 400,
					menubar: true,
					plugins: [
						'advlist autolink lists link image charmap print preview anchor',
						'searchreplace visualblocks code fullscreen',
						'insertdatetime media table paste code help wordcount',
					],
					toolbar:
						'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
				}}
				// onEditorChange={this.handleEditorChange}
			/>
			<Button type='primary' htmlType='submit' className='btn-submit'>
				{post ? 'Actualizar Post' : 'Craer Post'}
			</Button>
		</Form>
	);
}
