import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Root from '../../pages/Root';
import Follow from '../../pages/Follow';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <p>404</p>,
		children: [
			{ index: true, element: <Root /> },
			{ path: '/follow', element: <Follow />, }
		]
	},
]);

export default function HeaderRouter() {
	return (
		<RouterProvider router={router} />
	)
}
