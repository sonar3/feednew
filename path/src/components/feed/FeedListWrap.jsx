import React, { useRef } from 'react'

import { Virtuoso } from 'react-virtuoso';
import FeedItemContainer from '../feedItem/FeedItemContainer'

export default function List({data, loadMore}) {

	const scrollRef = useRef();
	
	return (
		<Virtuoso
			style={{ maxWidth: "480px", height: "100dvh", margin: "0 auto" }}
			className='feed-list'
			data={data}
			useWindowScroll
			endReached={loadMore}
			itemContent={(index, data) => {
				return (
					<FeedItemContainer feedIndex={index} feedData={data} />
				);
			}}
			ref={scrollRef}
		/>
	)
}
