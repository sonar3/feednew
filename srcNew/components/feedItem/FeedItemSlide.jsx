import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { motion } from "framer-motion";

import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './FeedItemSlide.module.css'
import likesStyles from '../../assets/styles/Likes.module.css';



import likes from '../../assets/images/ico_like.svg';
import likesActive from '../../assets/images/ico_like_active.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function FeedSlide({feedData,isLikes,toggleLikes,handleDoubleClick}) {
	
	const mediaUrls = Object.entries(feedData)
	.filter(([key, value]) => key.startsWith('cimg') && value)
	.map(([key, value]) => value);

	return (
		<div className={`${styles.item_body_slide} ${likesStyles.btn_likes} ${isLikes ? likesStyles.is_likes : ''}`} onDoubleClick={handleDoubleClick} >
			<Swiper slidesPerView={1} spaceBetween={0} loop={true} pagination={true} modules={[Pagination]}>
				{mediaUrls.map((url, index) => (
					<SwiperSlide key={feedData.feed_id + index}>
						{url.endsWith('.mp4') || url.endsWith('.mov') ? ( <video autoPlay loop playsInline muted width="100%" ><source src={url}></source></video> ) : (
							<LazyLoadImage 
								src={url} 
								decoding="async" 
								loading="lazy" 
								effect="blur" 
								threshold={2000}
								alt={`Slide ${index + 0}`} />
						)}
				</SwiperSlide>
				))}
			</Swiper>
			{isLikes && 
				<motion.div
					className={likesStyles.heart}
					initial={{ y: "0",opacity:1, scale:0}}
					animate={{ y: "0" ,opacity:0, scale:4}}
					exit={{ scale: 0 }}
					transition={{
						type: "tween",
					}}
				/> 
			}
			
			{/* <button type="button" className={`${likesStyles.btn_likes} ${isLikes ? likesStyles.is_likes : ''}`} onDoubleClick={handleDoubleClick}>
				{isLikes ? <img src={likes} alt="좋아요" /> : <img src={likes} alt="좋아요" />}
			</button> */}
		</div>
		
	)
}
