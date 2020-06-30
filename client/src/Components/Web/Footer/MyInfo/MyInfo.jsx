import React from 'react';
import Logo from '../../../../Assets/img/png/muvalogo_clean.png';
import SocialLinks from '../../SocialLinks';

import './MyInfo.scss';

const MyInfo = () => {
	return (
		<div className='my-info'>
			<img src={Logo} alt='MUVA' />
			<h4>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
				expedita nam consequatur officiis adipisci, aliquid unde tempora
				nemo sequi dolore.
			</h4>
			<SocialLinks />
		</div>
	);
};

export default MyInfo;
