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

import bg1 from '../../assets/image/product-section-2_-2380x850-2.jpg';
import bg2 from '../../assets/image/product-section-4_-2380x850-2.jpg';
import bg3 from '../../assets/image/Terminator-product-section_8-2380x850-3.jpg';
import bg4 from '../../assets/image/Terminator-product-section-7_-2380x850-3.jpg';

export const Background: React.FC = () => {
  return (
    <>
      <Swiper
        style={{
          height: '90%',
          width: '100%',
          position: 'relative',
          objectFit: 'cover',
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
          <img src={bg3} alt="3️⃣" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg1} alt="1️⃣" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg2} alt="2️⃣" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>

        <SwiperSlide
          style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
          <img src={bg4} alt="4️⃣" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
