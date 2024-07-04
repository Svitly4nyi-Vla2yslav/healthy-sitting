import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';

import bg1_small from '../../assets/image/Terminator-banner_bg-3-small.jpg';
import bg1_large from '../../assets/image/product-section-2_-2380x850-2.jpg';

import bg2_small from '../../assets/image/Terminator-product-section-1_-2380x850-3-small.jpg';
import bg2_large from '../../assets/image/product-section-4_-2380x850-2.jpg';

import bg3_small from '../../assets/image/product-section-4_-2380x850-2-small.jpg';
import bg3_large from '../../assets/image/Terminator-product-section_8-2380x850-3.jpg';

import bg4_small from '../../assets/image/product-section_-2380x1200-2-small.jpg';
import bg4_large from '../../assets/image/Terminator-product-section-7_-2380x850-3.jpg';

export const Background: React.FC = () => {
  return (
    <>
      <Swiper
        style={{
          width: '100%',
          position: 'relative',
          backgroundColor: 'black',
        }}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={bg3_large}
            srcSet={`${bg3_small} 700w, ${bg3_large} 1800w`}
            sizes="(max-width: 700px) 700px, 1800px"
            alt="3️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg1_large}
            srcSet={`${bg1_small} 700w, ${bg1_large} 1800w`}
            sizes="(max-width: 700px) 700px, 1800px"
            alt="1️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg2_large}
            srcSet={`${bg2_small} 700w, ${bg2_large} 1800w`}
            sizes="(max-width: 700px) 700px, 1800px"
            alt="2️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={bg4_large}
            srcSet={`${bg4_small} 700w, ${bg4_large} 1800w`}
            sizes="(max-width: 700px) 700px, 1800px"
            alt="4️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
