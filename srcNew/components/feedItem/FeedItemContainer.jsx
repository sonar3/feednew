import React from 'react'

import FeedItemHeader from './FeedItemHeader';
import FeedItemBody from './FeedItemBody';

export default function FeedList({feedIndex,feedData}) {
  return (
	<>
		<FeedItemHeader feedData={feedData} />
		<FeedItemBody feedIndex={feedIndex} feedData={feedData} />
	</>	
  )
}