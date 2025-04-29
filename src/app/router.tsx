import { ProtectedRoute } from '@/components';
import { Dashboard, SignIn, SignUp } from '@/pages';
import { RouterProvider, createBrowserRouter } from 'react-router';

const routes = createBrowserRouter([
	{
		path: '/sign-in',
		element: <SignIn />,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
	},
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
	},
]);

function AppRouter() {
	return <RouterProvider router={routes} />;
}

export default AppRouter;
