import _Admin from '../Layout/_Admin';
import _Basic from '../Layout/_Basic';

//Admin Pages
import AdminHome from '../Pages/Admin';
import AdminSinIn from '../Pages/Admin/SignIn';

//Basic Pages
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';

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
		],
	},
];

export default routes;
