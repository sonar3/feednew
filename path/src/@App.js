import { useState, useCallback } from 'react';
import axios from 'axios';
import apiConfig from './config/apiConfig';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { DataProvider } from './context/DataContext';

import Root from './components/layout/Root';
import FeedAll from './pages/FeedAll';
import FeedView from './pages/FeedView';
import FeedViewDetail from './pages/FeedViewDetail';
import MenuIframe from './pages/MenuIframe';

const queryClient = new QueryClient();

function AppContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const feedLimit = 1;
  const [apiUrl, setApiUrl] = useState(apiConfig["cateAll"]);

  const fetchData = async (page) => {
	const response = await axios.get(`${apiUrl}?page=${page}&limit=${feedLimit}`);
	return response.data.data.result;
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useQuery({
	queryKey: ['feeds', apiUrl],
	queryFn: ({ pageParam = currentPage }) => fetchData(currentPage),
	getNextPageParam: (lastPage) => lastPage.length === feedLimit ? currentPage + 1 : undefined,
	// getNextPageParam: (lastPage, allPages) => lastPage.length === feedLimit ? allPages.length + 1 : undefined,
	enabled: !!apiUrl,
  });

  const loadMore = useCallback(() => {
	alert(1)
	if (hasNextPage) {
	  fetchNextPage();
	  setCurrentPage(prev => prev + 1);
	}
  }, [hasNextPage, fetchNextPage]);

  const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Root data={data} setApiUrl={setApiUrl} apiConfig={apiConfig} />,
	  errorElement: <p>404</p>,
	  children: [
		{ index: true, element: <FeedAll data={data} loadMore={loadMore} isTopAll={true} isLoading={isLoading} isError={isError} /> },
		{ path: '/follow', element: <FeedAll data={data} loadMore={loadMore} isTopFollow={true} isLoading={isLoading} isError={isError} /> },
		{ path: '/woman', element: <FeedAll data={data} loadMore={loadMore} isTopWoman={true} isLoading={isLoading} isError={isError} /> },
		{ path: '/men', element: <FeedAll data={data} loadMore={loadMore} isTopMen={true} isLoading={isLoading} isError={isError} /> },
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

export default function App() {
  return (
	<QueryClientProvider client={queryClient}>
	  <AppContent />
	</QueryClientProvider>
  );
}

