import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';

import bg1_small from '../../assets/image/Terminator-banner_bg-3-small.jpg';
import bg1_large from '../../assets/image/product-section-2_-2380x850-2.jpg';

import bg2_small from '../../assets/image/Terminator-product-section-1_-2380x850-3-small.jpg';
import bg2_large from '../../assets/image/product-section-4_-2380x850-2.jpg';

import bg3_small from '../../assets/image/product-section-4_-2380x850-2-small.jpg';
import bg3_large from '../../assets/image/Terminator-product-section_8-2380x850-3.jpg';

import bg4_small from '../../assets/image/product-section_-2380x1200-2-small.jpg';
import bg4_large from '../../assets/image/Terminator-product-section-7_-2380x850-3.jpg';

import { TextHome, TitleHome } from './Background.styled';

export const Background: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <Swiper
        style={{
          width: '100%',
          position: 'relative',
          backgroundColor: 'black',
        }}
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
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
            src={windowWidth > 768 ? bg1_large : bg1_small}
            alt="3️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={windowWidth > 768 ? bg2_large : bg2_small}
            alt="1️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={windowWidth > 768 ? bg3_large : bg3_small}
            alt="2️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={windowWidth > 768 ? bg4_large : bg4_small}
            alt="4️⃣"
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      </Swiper>

      {/* <Container> */}
      {/* <Block> */}
      <TitleHome> Title </TitleHome>
      <TextHome>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero atque
        beatae iste asperiores non, fuga ab dolore voluptas earum quidem.
      </TextHome>
      {/* </Block> */}
      {/* </Container> */}
    </div>
  );
};
