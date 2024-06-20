import { useState, useEffect, useCallback } from 'react';
import { Virtuoso } from 'react-virtuoso';

import axios from 'axios';

import './App.css';
import Header from './components/Header/Header';
import FeedList from './components/FeedItem/FeedList';

export default function App() {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const feedLimit = 100;

	const fetchData = async (page) => {
		try {
			const response = await axios.get("https://gist.github.com/sonar3/4487ffc52ada180736ebb94371677bbb.js");
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
	}, [currentPage]);

	return (
		<>
			<Header />
			<Virtuoso
				style={{ maxWidth: "480px", height: "100dvh", margin: "0 auto" }}
				className='feed-list'
				data={data}
				useWindowScroll
				endReached={loadMore}
				itemContent={(index, data) => {
					return (
						<FeedList feedIndex={index} feedData={data} />
					);
				}}
			/>
		</>
	);
}


