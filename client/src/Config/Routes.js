import _Admin from '../Layout/_Admin';

//Admin Pages
import AdminHome from '../Pages/Admin';
import AdminSinIn from '../Pages/Admin/SignIn';

const routes = [
	{
		path: '/',
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
];

export default routes;
