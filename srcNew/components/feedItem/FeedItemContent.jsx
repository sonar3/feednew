import React from 'react'
import { useState } from 'react';


import useTextHeight from '../hooks/useTextHeight';

import styles from './FeedItemContent.module.css'
import icoLike from '../../assets/images/ico_like.svg';
import icoReply from '../../assets/images/ico_reply.svg';
import icoShare from '../../assets/images/ico_share.svg';

import likesStyles from '../../assets/styles/Likes.module.css';

export default function FeedItemContent({ feedData, isLikes, toggleLikes }) {
	const renderTags = (tags) => {
		return tags.split(' ').map((tag, index) => (
			<li className={styles.tags_items} key={index}><a href={`https://vastyle.co.kr/shop_new/search_renew.php?stx=${tag.replace(/#/g, '')}&viewtab=style`}  rel='noopener noreferrer'>{tag}</a></li>
		));
	};

	const [ref, height, setIsMax] = useTextHeight();

	const [isPhraseToggled, setIsPhraseToggled] = useState(false);
	const combinedToggle = `${isPhraseToggled ? styles.content__isToggle : ''}`;

	const handleMoreClick = () => {
		setIsPhraseToggled(prevState => !prevState);
	};

	return (
		<>
			<div className={`${styles.content} ${combinedToggle} ${setIsMax ? styles.content__full : ''}`} data-height={height} >
				<p className={styles.content__phrase} ref={ref}>
					{feedData.contents}
				</p>
				<button type='button' onClick={handleMoreClick} className={styles.content__more}>
					{isPhraseToggled ? '닫기' : '더보기'}
				</button>
			</div>

			<div className={styles.tags}>
				<p className={styles.tags_tit}>스타일 태그</p>
				<ul className={styles.tags_list}>{renderTags(feedData.tag)}</ul>
			</div>

			<div className={styles.util}>
				<button type='button' className={`${styles.btn_like} ${likesStyles.btn_likes} ${isLikes ? likesStyles.is_likes : ''}`} onClick={toggleLikes}>
					<span></span>
				</button>
				<button type='button' className={styles.btn_reply}>
					<img src={icoReply} alt="댓글" />
				</button>
				<button type='button' className={styles.btn_share}>
					<img src={icoShare} alt="공유하기" />
				</button>
			</div>
			<p className={styles.util_desc}>좋아요{feedData.mb_leave} 댓글{feedData.mb_leave}</p>

		</>
	)
}



