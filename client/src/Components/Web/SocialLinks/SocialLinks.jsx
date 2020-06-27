import React from 'react';
import { ReactComponent as YouTube } from '../../../Assets/img/svg/youtube.svg';
import { ReactComponent as Twitter } from '../../../Assets/img/svg/twitter.svg';
import { ReactComponent as Facebook } from '../../../Assets/img/svg/facebook.svg';
import { ReactComponent as Linkedin } from '../../../Assets/img/svg/linkedin.svg';

import './SocialLinks.scss';

const SocialLinks = () => {
	return (
		<div className='social-links'>
			<a
				href=''
				className='youtube'
				target='_blank'
				rel='noopener noreferres'
			>
				<YouTube />
			</a>
			<a
				href=''
				className='twitter'
				target='_blank'
				rel='noopener noreferres'
			>
				<Twitter />
			</a>
			<a
				href=''
				className='facebook'
				target='_blank'
				rel='noopener noreferres'
			>
				<Facebook />
			</a>
			<a
				href=''
				className='linkedin'
				target='_blank'
				rel='noopener noreferres'
			>
				<Linkedin />
			</a>
		</div>
	);
};

export default SocialLinks;
