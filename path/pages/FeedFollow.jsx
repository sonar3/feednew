import React from 'react'

export default function FeedFollow({data,loadMore}) {
	console.log(data);
	data.map((currentValue) => {
		console.log(currentValue);
	});
	return (
		<>
			follow
			<div>{data.feed_id} 1</div>
			<div>{data.cimg1}</div>
			{data.map((currentValue) => (
				<div key={currentValue.feed_id}>
					<img src={currentValue.cimg1} alt="Feed" />
				</div>
			))}
			
		</>
	)
}
