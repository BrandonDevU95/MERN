import React, { Fragment } from 'react';
import MainBanner from '../Components/Web/MainBanner';
import HomeCourses from '../Components/Web/HomeCourses';
import HowMyCoursesWork from '../Components/Web/HowMyCoursesWork';
import ReviewCourses from '../Components/Web/ReviewCourses';

const Home = () => {
	return (
		<Fragment>
			<MainBanner />
			<HomeCourses />
			<HowMyCoursesWork />
			<ReviewCourses />
		</Fragment>
	);
};

export default Home;
