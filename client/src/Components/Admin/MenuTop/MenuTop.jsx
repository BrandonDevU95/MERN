import React from 'react';
import './MenuTop.scss';
import { Button } from 'antd';
import { MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from '../../../Assets/img/png/muvalogo_clean.png';

const MenuTop = (props) => {
	const { menuCollapsed, setMenuCollapsed } = props;

	return (
		<div className='menu-top'>
			<div className='menu-top__left'>
				<img
					src={Logo}
					alt='Brandon Vargas'
					className='menu-top__left-logo'
				/>
				<Button
					type='link'
					onClick={() => setMenuCollapsed(!menuCollapsed)}
				>
					{menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</Button>
			</div>
			<div className='menu-top__right'>
				<Button type='link'>
					<PoweroffOutlined />
				</Button>
			</div>
		</div>
	);
};

export default MenuTop;
