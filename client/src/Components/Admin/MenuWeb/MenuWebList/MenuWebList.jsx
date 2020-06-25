import React, { useState, useEffect } from 'react';

const MenuWebList = (props) => {
	const { menu, setReloadMenuWeb } = props;

	return (
		<div>
			<h1>Menu Web List...</h1>
			{menu.map((item) => (
				<p key={item._id}>{item.title}</p>
			))}
		</div>
	);
};

export default MenuWebList;
