import React from 'react';
import styles from './FeedItemHeader.module.css'
import FollowButton from '../follow/FollowButton';
import { useFollow } from '../hooks/useFollow';
import { usePopup } from '../hooks/usePopup';
import { Link } from 'react-router-dom';
import FeedViewDetail from '../../pages/FeedViewDetail';

import { motion } from "framer-motion";

export default function FeedItemHeader({feedData, isViewPop}) {

	// console.log('hi'+feedData);

	const [isFollowing, toggleFollow] = useFollow(false, feedData.mb_id, "diwngus@naver.com");

	const { isOpen, content, openPopup, closePopup } = usePopup();
	
    const handleLinkClick = (e) => {
        e.preventDefault();
        openPopup(<FeedViewDetail feedId={feedData.feed_id} isViewPop={true} isOpen={isOpen} closePopup={closePopup} />);
    };

	return (
		<div className={styles.header} data-feed_id={feedData.feed_id}>
			<Link to={`./view/${feedData.feed_id}`} className={styles.info} onClick={handleLinkClick}>
				{isViewPop && "상세 화면"}
				<img 
					className={styles.infoImg}
					src={feedData.cimg1}
					width={150}
					height={150}
					decoding='async'
					loading='lazy'
					alt=''/>
				<p className={styles.infoAka}>
					{feedData.mb_id}
					<img 
						className={styles.infoAka__img}
						src={feedData.cimg1}
						width={150}
						height={150}
						decoding='async'
						loading='lazy'
						alt='' />
					<span className={styles.infoWeight}>
						{feedData.mb_id}{feedData.feed_id}
					</span>
				</p>
			</Link>

			<FollowButton 
				isFollowing={isFollowing}
				toggleFollow={toggleFollow}
			/>
			 {isOpen && (
                <motion.div className="feedView"
				 	initial={{ y: "100%" }}
        			animate={{ y: 0, transition: { duration: .3, ease: "circIn" } }}
        			exit={{ y: "100%", transition: { duration: 1, ease: "circOut" } }} >
                    {/* <span className="close" onClick={closePopup}>close</span> */}
                    <div>
                        {content}
                    </div>
                </motion.div>
            )}
		</div>
	)
}




