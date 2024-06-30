import React from 'react'
import FeedItemSlide from './FeedItemSlide'
import FeedItemProduct from './FeedItemProduct'
import FeedItemContent from './FeedItemContent'
import FeedItemReply from './FeedItemReply'

import styles from '../../assets/styles/common.module.css'
import { useLikes } from '../hooks/useLikes'

export default function FeedItemBody({feedIndex, feedData}) {
	const [isLikes, toggleLikes,handleDoubleClick] = useLikes("true");

	return (
		<>
			<FeedItemSlide feedData={feedData} isLikes={isLikes} toggleLikes={toggleLikes} handleDoubleClick={handleDoubleClick} />
			<div className={styles.item_body_inner}>
				<FeedItemProduct feedData={feedData} />
				<FeedItemContent feedData={feedData} isLikes={isLikes} toggleLikes={toggleLikes} />
			</div>
			<FeedItemReply feedId={feedData.feed_id} />
			{/* <ItemBodyBnr /> */}
		</>
	)
}