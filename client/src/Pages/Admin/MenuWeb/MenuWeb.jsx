import React, { useState, useEffect } from 'react';
import { getMenuApi } from '../../../API/menu';
import MenuWebList from '../../../Components/Admin/MenuWeb/MenuWebList';

const MenuWeb = () => {
	const [menu, setMenu] = useState([]);
	const [reloadMenuWeb, setReloadMenuWeb] = useState(false);

	useEffect(() => {
		getMenuApi().then((response) => {
			setMenu(response.menu);
		});
		setReloadMenuWeb(false);
	}, [reloadMenuWeb]);

	return (
		<div className='menu-web'>
			<MenuWebList
				menu={menu}
				setReloadMenuWeb={setReloadMenuWeb}
			></MenuWebList>
		</div>
	);
};

export default MenuWeb;
