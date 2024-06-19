import React from 'react'
import styles from './ItemBodyReply.module.css'

export default function ItemBodyReply() {
  return (
	<div className={styles.reply_container}>
	  <form>
		<div className={styles.reply}>
			<input type="text" className={styles.reply_input} placeholder='댓글로 셀럽과 자유롭게 소통하세요.'/>
			<button type="submit" className={styles.reply_button} value="" >게시</button>
		</div>
	  </form>
	</div>
  )
}
