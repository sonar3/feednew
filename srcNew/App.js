import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import apiConfig from './config/apiConfig';
import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { DataProvider } from './context/DataContext';

import Root from './components/layout/Root';
import FeedAll from './pages/FeedAll';
import FeedView from './pages/FeedView';
import FeedViewDetail from './pages/FeedViewDetail';
import MenuIframe from './pages/MenuIframe';

export default function App() {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const feedLimit = 10;
	const [apiUrl, setApiUrl] = useState(apiConfig["cateAll"]);

	const fetchData = async (page) => {
		try {
			const response = await axios.get(`${apiUrl}?page=${page}&limit=${feedLimit}`);
			return response.data.data.result;
		} catch (error) {
			console.log("error", error);
			return [];
		}
	};

	const loadMore = useCallback(() => {
		fetchData(currentPage + 1)
			.then((newData) => {
				console.log(newData)
				if (newData.length > 0) {
					setData((prevData) => [...prevData, ...newData]);
					setCurrentPage((prevPage) => prevPage + 1);
					console.log(currentPage)
				}
			});
	}, [currentPage]);

	useEffect(() => {
		fetchData(currentPage)
			.then((initialData) => setData(initialData));
			    //useEffect [] 오류시 적용 :  eslint-disable-next-line react-hooks/exhaustive-deps
				console.log(apiUrl)
	}, []);

	const router = createBrowserRouter([
		{
		  path: '/',
		  element: <Root data={data} setApiUrl={setApiUrl} apiConfig={apiConfig} />,
		  errorElement: <p>404</p>,
		  children: [
			{ index: true, element: <FeedAll data={data} loadMore={loadMore} isTopAll={true}   /> },
			{ path: '/follow', element: <FeedAll data={data} loadMore={loadMore} isTopFollow={true}   /> },
			{ path: '/woman', element: <FeedAll data={data} loadMore={loadMore} isTopWoman={true}   /> },
			{ path: '/men', element: <FeedAll data={data} loadMore={loadMore} isTopMen={true}   /> },
			// { path: '/view', element: <FeedView data={data} isViewPop={true} /> },
			{ path: '/menu', element: <MenuIframe />  },
			{ path: '/view/:feedId', element: <FeedViewDetail data={data} isViewPop={true} /> },
		  ]
		},
	  ]);

	  return (
		<DataProvider value={{ data, setApiUrl, apiConfig }}>
		  <RouterProvider router={router} />
		</DataProvider>
	  );
}


// import { motion, AnimatePresence } from "framer-motion"
// import { pageVariants, pageTransition } from './components/utils/animations';
{/* <AnimatePresence mode="wait">
			<RouterProvider router={router} />
		</AnimatePresence> */}
// element: <motion.div
// 				initial="initial"
// 				animate="in"
// 				exit="out"
// 				variants={pageVariants}
// 				transition={pageTransition}
// 			  > <FeedAll data={data} loadMore={loadMore} /> 
// 			  </motion.div> },