// src/Slide.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { slides } from './slides';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import 'swiper/css';




  function Slide() {
      const { id } = useParams();
      const navigate = useNavigate();
      const [slides, setSlides] = useState([]);
      const initialSlideIndex = slides.findIndex(slide => slide.id == id);
	  
	  const appendNumber = useRef(2);
	  const prependNumber = useRef(1);
	  const [currentPage, setCurrentPage] = useState(1);
      
      const fetchSlides = async (page = 1) => {
        const response = await fetch(`https://api.vastyle.co.kr/shop/item-list?viewmode=trend_list&ca_id=&pt_id=&filter_price_1=0&filter_price_2=90000000&search_brand_name_mobile=&filter_sale_1=0&filter_sale_2=85&ca_id=&tab_ca_id=&pt_id=&tpv=&mb_id=adm_developer_ksj&viewmode=trend_list&trend_all=&stx=&sort=it_time&page=${page}&limit=10`);
		console.log('response',response)
		console.log('page',page)
        const videoInfo = await response.json();
        console.log(videoInfo.item[0].it_img1)
        
        const fetchedSlides = Array.isArray(videoInfo.item) ? videoInfo.item.map((item, index) => ({
          id: item.it_id,
          url: item.it_img1
          // id: `slide${index + 1}`,
        })) : [];


        console.log(fetchedSlides)
        
        return fetchedSlides;
      };

      useEffect(() => {
          const loadSlides = async () => {
            const initialSlides = await fetchSlides();
            setSlides(initialSlides);
          };

          loadSlides();
      }, []);

      const handleSlideChange = (swiper) => {
          const newSlide = slides[swiper.activeIndex];
          console.log(newSlide.id)
          navigate(`/${newSlide.id}`);
      };

      if (initialSlideIndex === -1) {
          return <h2>Slide not found</h2>;
      }

	  const append = async () => {
		const nextPage = currentPage + 1;
		const newSlides = await fetchSlides(nextPage);
		setSlides([...slides, ...newSlides]);
		setCurrentPage(nextPage);
		appendNumber.current++;
	  };

      return (
          <Swiper
              modules={[Virtual]}
              style={{ height: '100vh' }}
              direction="vertical"
              initialSlide={initialSlideIndex}
              virtual
              onSlideChange={(swiper) => {
					handleSlideChange(swiper);
					if (swiper.activeIndex % 10 === 5) {
						console.log(swiper.activeIndex)
						append();
					}
				}}
          >
              {
                slides.map(slide => (
                  <SwiperSlide key={slide.id} virtualIndex={slide.id}>
                      	<div style={{ width: '100%', height: '100%' }}>
						  <img src={`https://vastyle.co.kr/data/item/${slide.url}`} alt={slide.url} title={slide.id} style={{ width: '100%', height: '100%',objectFit: 'cover' }} />
						</div>
                  </SwiperSlide>
              ))}
          </Swiper>
      );
  }

  export default Slide;










  
  


  



















