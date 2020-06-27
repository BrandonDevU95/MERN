import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/img/png/muvalogo_clean.png';

import './MenuTop.scss';

const MenuTop = () => {
	return (
		<Menu className='menu-top' mode='horizontal'>
			<Menu.Item className='menu-top__logo'>
				<Link to='/'>
					<img src={Logo} alt='MUVA WEB DESIGN' />
				</Link>
			</Menu.Item>
			<Menu.Item className='menu-top__item'>
				<Link to={'/'}>Inicio</Link>
			</Menu.Item>
			<Menu.Item className='menu-top__item'>
				<Link to={'/contact'}>Contacto</Link>
			</Menu.Item>
			<div className=''>Social Media...</div>
		</Menu>
	);
};

export default MenuTop;
