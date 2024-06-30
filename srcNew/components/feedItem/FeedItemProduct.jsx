import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './FeedItemProduct.module.css'

import icoLike from '../../assets/images/ico_like.svg';
import icoStar from '../../assets/images/ico_star.svg';


export default function FeedItemProduct({feedData}) {
	return (
		<div className={styles.prd_container}>
			<Swiper slidesPerView={1} spaceBetween={6} loop={false} >
				<SwiperSlide key={feedData.feed_id}>

					<div className={styles.prd_related}>
						<div className={styles.prd_img}>
							<img  src={feedData.cimg2} decoding="async" loading="lazy" alt="상품이미지" />
						</div>
						<div className={styles.prd_desc}>
							<p className={styles.prd_desc__txt1}>{feedData.style}</p>
							<p className={styles.prd_desc__txt2}>{feedData.style}</p>
							<p className={styles.prd_desc__txt3}>{feedData.style}</p>
						</div>
					</div>

					<div className={styles.prd_info}>
						<dl className={styles.prd_info__txt}>
							<dt>사이즈/컬러</dt>
							<dd>{feedData.style}</dd>
						</dl>
						<dl className={styles.prd_info__grade}>
							<dt>핏</dt>
							<dd>
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
							</dd>
							<dt>소재</dt>
							<dd>
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
								<img src={icoStar} alt="별점" />
							</dd>
						</dl>
						<dl className={styles.prd_info__txt}>
							<dt>한줄평</dt>
							<dd>{feedData.style}</dd>
						</dl>
					</div>

					<div className={styles.prd_tag}>
                        <p>{feedData.feed_id}</p>
                    </div>
					
				</SwiperSlide>
				
			</Swiper>
		</div>
	)
}
