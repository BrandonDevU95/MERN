import React from 'react';
import { Modal as ModalAntd } from 'antd';

const Modal = (props) => {
	const { children, title, isVisible, setIsVisible } = props;
	return (
		<ModalAntd
			title={title}
			centered
			visible={isVisible}
			onCancel={() => setIsVisible(false)}
			footer={false}
		>
			{children}
		</ModalAntd>
	);
};

export default Modal;
