import React from 'react'

import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

export default function FeedList({feedIndex,feedData}) {
  return (
	<>
		<ItemHeader feedData={feedData} />
		<ItemBody feedIndex={feedIndex} feedData={feedData} />
	</>	
  )
}