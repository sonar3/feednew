import React from 'react';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import RouteApiHandler from '../../routes/RouteApiHandler';
import AppBar from './AppBar';

import { useParams } from 'react-router-dom'

export default function Root( {setApiUrl,apiConfig, data } ) {
	const location = useLocation();
	const { feedId } = useParams();

	console.log('here'+data)

	return (
		<>
			{location.pathname !== `/view/${feedId}` && <Header data={data}/>}
			{location.pathname == `/view/${feedId}` && <div>상세헤더</div>}
			<RouteApiHandler setApiUrl={setApiUrl} />
			<Outlet />
			<AppBar />
		</>
	);
}