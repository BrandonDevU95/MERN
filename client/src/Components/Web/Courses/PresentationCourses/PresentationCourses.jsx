import React from 'react';
import AcademyLogo from '../../../../Assets/img/png/academy-logo.png';

import './PresentationCourses.scss';

const PresentationCourses = () => {
	return (
		<div className='presentation-courses'>
			<img src={AcademyLogo} alt='Cursos' />
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
				eligendi alias natus aliquam consequuntur, recusandae assumenda, at
				dolor officiis modi dolores, nostrum doloremque. Est velit a
				facilis, tempora et modi.
			</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</div>
	);
};

export default PresentationCourses;
