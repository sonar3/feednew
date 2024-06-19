import React from 'react';
import styles from './ItemHeader.module.css'
import FollowButton from '../Follow/FollowButton';
import { useFollow } from '../Hooks/useFollow';

export default function ItemHeader({feedData}) {

	const [isFollowing, toggleFollow] = useFollow(false, feedData.mb_id, "diwngus@naver.com");

	return (
		<div className={styles.header} data-feed_id={feedData.feed_id}>
			<div className={styles.info}>
				<img 
					className={styles.info_img}
					src={feedData.cimg1}
					width={150}
					height={150}
					decoding='async'
					loading='lazy'
					alt=''/>
				<p className={styles.info_aka}>
					{feedData.mb_id}
					<img 
						className={styles.info_aka__img}
						src={feedData.cimg1}
						width={150}
						height={150}
						decoding='async'
						loading='lazy'
						alt='' />
					<span className={styles.info_weight}>
						{feedData.mb_id}{feedData.feed_id}
					</span>
				</p>
			</div>

			<FollowButton 
				isFollowing={isFollowing}
				toggleFollow={toggleFollow}
			/>
		</div>
	)
}

