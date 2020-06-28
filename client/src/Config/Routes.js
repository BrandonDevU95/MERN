import _Admin from '../Layout/_Admin';
import _Basic from '../Layout/_Basic';

//Admin Pages
import AdminHome from '../Pages/Admin';
import AdminSinIn from '../Pages/Admin/SignIn';
import AdminUsers from '../Pages/Admin/Users';
import AdminMenuWeb from '../Pages/Admin/MenuWeb';

//Basic Pages
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Courses from '../Pages/Courses';

//Other  Pages
import Error404 from '../Pages/Error404';

const routes = [
	{
		path: '/admin',
		component: _Admin,
		exact: false,
		routes: [
			{
				path: '/admin',
				component: AdminHome,
				exact: true,
			},
			{
				path: '/admin/login',
				component: AdminSinIn,
				exact: true,
			},
			{
				path: '/admin/users',
				component: AdminUsers,
				exact: true,
			},
			{
				path: '/admin/menu',
				component: AdminMenuWeb,
				exact: true,
			},
			{
				component: Error404,
			},
		],
	},
	{
		path: '/',
		component: _Basic,
		exact: false,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true,
			},
			{
				path: '/contact',
				component: Contact,
				exact: true,
			},
			{
				path: '/courses',
				component: Courses,
				exact: true,
			},
			{
				component: Error404,
			},
		],
	},
];

export default routes;
