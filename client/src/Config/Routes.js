import _Admin from '../Layout/_Admin';
import _Basic from '../Layout/_Basic';

//Admin Pages
import AdminHome from '../Pages/Admin';
import AdminSinIn from '../Pages/Admin/SignIn';
import AdminUsers from '../Pages/Admin/Users';

//Basic Pages
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';

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
				component: Error404,
			},
		],
	},
];

export default routes;
