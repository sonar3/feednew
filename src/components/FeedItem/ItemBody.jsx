import React from 'react'
import ItemBodySlide from './ItemBodySlide'
import ItemBodyPrd from './ItemBodyPrd'
import ItemBodyContent from './ItemBodyContent'
import ItemBodyReply from './ItemBodyReply'

import styles from '../common.module.css'

export default function ItemBody({feedIndex, feedData}) {
  return (
	<>
	   <ItemBodySlide feedData={feedData} />
	   <div className={styles.item_body_inner}>
			<ItemBodyPrd feedData={feedData} />
			<ItemBodyContent feedData={feedData} />
	   </div>
		<ItemBodyReply />
	   {/* <ItemBodyBnr /> */}
	</>
  )
}