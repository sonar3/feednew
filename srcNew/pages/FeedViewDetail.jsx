import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedItemBody from '../components/feedItem/FeedItemBody';
import FeedItemHeader from '../components/feedItem/FeedItemHeader';

export default function FeedViewDetail ({ isOpen,feedId,isViewPop,closePopup }) {
	const [feedData, setFeedData] = useState(null);
	
	// console.log(feedId)
	// console.log(feedData.data.result);

	console.log("isViewPop " + isViewPop)
	console.log("isOpen " + isOpen)
	// console.log("closePopup " + closePopup)

	feedData?.data?.result?.forEach(item => {
		console.log(item?.feed_id);
	});

	const firstItem = feedData?.data?.result?.[0];
	
	if (firstItem) {
		console.log(firstItem.feed_id);
		console.log(firstItem.mb_id);
		console.log(firstItem.cimg1);
	} else {
		console.log("데이터가 없거나 배열이 비어있습니다.");
	}


	useEffect(() => {
		const fetchFeedData = async () => {
			try {
			const response = await axios.get(`https://gist.githubusercontent.com/sonar3/4487ffc52ada180736ebb94371677bbb/raw/903725ccc91f94cb948acb4814be5776c551f2ff/jsonTest4`);
			setFeedData(response.data);    
			

			
			} catch (error) {
			console.error('네트워크 통신 실패 :', error);
			}
		};
		fetchFeedData();
	}, [feedId]);

	if (!feedData) {
		return <div>Loading... {feedId}</div>;
	}

	return (
		<>
			<div className='feedView-inner'>
			{isViewPop ? <h2 onClick={closePopup}>close</h2> : ''}
			<h2>{feedData.cimg1}</h2>
			<p>{feedId}</p>
			{isViewPop && <p>isViewPop</p>}
			<FeedItemHeader feedData={firstItem} isViewPop={isViewPop} />
			<FeedItemBody feedData={firstItem} />
			</div>
		</>
	);
};