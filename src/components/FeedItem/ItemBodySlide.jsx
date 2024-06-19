import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './ItemBodySlide.module.css'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function ItemBodySlide({feedData}) {
	
	const mediaUrls = Object.entries(feedData)
	.filter(([key, value]) => key.startsWith('cimg') && value)
	.map(([key, value]) => value);

	return (
		<div className={styles.item_body_slide}>
			<Swiper slidesPerView={1} spaceBetween={0} loop={true} pagination={true} modules={[Pagination]}>
				{mediaUrls.map((url, index) => (
					<SwiperSlide key={feedData.feed_id + index}>
						{url.endsWith('.mp4') || url.endsWith('.mov') ? ( <video autoPlay loop playsInline muted width="100%" ><source src={url}></source></video> ) : (
							<LazyLoadImage 
								src={url} 
								decoding="async" 
								loading="lazy" 
								effect="blur" 
								alt={`Slide ${index + 0}`} />
						)}
				</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
