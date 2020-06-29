import React, { Fragment } from 'react';
import MainBanner from '../Components/Web/MainBanner';
import HomeCourses from '../Components/Web/HomeCourses';
import HowMyCoursesWork from '../Components/Web/HowMyCoursesWork';

const Home = () => {
	return (
		<Fragment>
			<MainBanner />
			<HomeCourses />
			<HowMyCoursesWork />
		</Fragment>
	);
};

export default Home;
