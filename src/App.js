import React, { useRef, useState, useEffect } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(2);
  const prependNumber = useRef(1);
  const [slides, setSlides] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page) => {
	try {
	  const response = await fetch(`https://api.vastyle.co.kr/shop/item-list?viewmode=trend_list&ca_id=&pt_id=&filter_price_1=0&filter_price_2=90000000&search_brand_name_mobile=&filter_sale_1=0&filter_sale_2=85&ca_id=&tab_ca_id=&pt_id=&tpv=&mb_id=adm_developer_ksj&viewmode=trend_list&trend_all=&stx=&sort=it_time&page=${page}&limit=20`);
	  const data = await response.json();
	  return data.item.map((item, index) => (
		<>
		<Swiper
			direction={'horizontal'}
			slidesPerView={1}
			pagination={{
			  clickable: true,
			}}
		  >
		  <SwiperSlide key={index}>
			<img src={"https://vastyle.co.kr"+ item.thumbnail} alt={item.it_name} index={`이미지 ${index + 1}`} style={{ width: '100%', height: '100%' }} />
			</SwiperSlide>
		  <SwiperSlide key={index}>
			<img src={"https://vastyle.co.kr"+ item.feed_thumbnail} alt={item.it_name} index={`이미지 ${index + 1}`} style={{ width: '100%', height: '100%' }} />
		  </SwiperSlide>
		  </Swiper>
		</>
	  ));
	} catch (error) {
	  console.error('데이터 가져오기 오류:', error);
	  return [];
	}
  };

  useEffect(() => {
	const initialFetch = async () => {
	  const initialSlides = await fetchData(currentPage);
	  setSlides(initialSlides);
	};
	initialFetch();
  }, []);

  const prepend = () => {
	setSlides([
	  `슬라이드 ${prependNumber.current - 2}`,
	  `슬라이드 ${prependNumber.current - 1}`,
	  ...slides,
	]);
	prependNumber.current = prependNumber.current - 2;
	swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = async () => {
	const nextPage = currentPage + 1;
	const newSlides = await fetchData(nextPage);
	setSlides([...slides, ...newSlides]);
	setCurrentPage(nextPage);
	appendNumber.current++;
  };

  const slideTo = (index) => {
	swiperRef.slideTo(index - 1, 0);
  };

  return (
	<>
	  <Swiper className='mySwiper swiper-v'
		modules={[Virtual, Navigation, Pagination]}
		onSwiper={setSwiperRef}
		slidesPerView={1}
		centeredSlides={true}
		spaceBetween={0}
		pagination={{
		  type: '',
		}}
		navigation={false}
		virtual
		direction={'vertical'}
		onSlideChange={append}
		// onReachEnd={append}
	  >
		{slides.map((slideContent, index) => (
		  <SwiperSlide key={index} virtualIndex={index}>
			{slideContent}
		  </SwiperSlide>
		))}
	  </Swiper>

	  <p className="append-buttons" style={{display: 'none'}}>
		<button onClick={() => prepend()} className="prepend-2-slides">
		  2개 슬라이드 앞에 추가
		</button>
		<button onClick={() => slideTo(1)} className="prepend-slide">
		  슬라이드 1
		</button>
		<button onClick={() => slideTo(250)} className="slide-250">
		  슬라이드 250
		</button>
		<button onClick={() => slideTo(500)} className="slide-500">
		  슬라이드 500
		</button>
		<button onClick={() => append()} className="append-slides">
		  슬라이드 추가
		</button>
	  </p>
	</>
  );
}
