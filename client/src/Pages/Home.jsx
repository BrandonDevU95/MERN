import React, { Fragment } from 'react';
import MainBanner from '../Components/Web/MainBanner';
import HomeCourses from '../Components/Web/HomeCourses';
import HowMyCoursesWork from '../Components/Web/HowMyCoursesWork';
import { Helmet } from 'react-helmet';
import ReviewCourses from '../Components/Web/ReviewCourses';

const Home = () => {
	return (
		<Fragment>
			<Helmet>
				<title>MUVA WEB DESIGN</title>
				<meta
					name='description'
					content='Home | Web sobre programacion'
					data-react-helmet='true'
				/>
			</Helmet>
			<MainBanner />
			<HomeCourses />
			<HowMyCoursesWork />
			<ReviewCourses />
		</Fragment>
	);
};

export default Home;
