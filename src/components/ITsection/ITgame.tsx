import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { useTranslation } from 'react-i18next';
import { ContentOverlay } from '../../pages/HomePage/HomePage.styled';

import slide1 from '../../assets/image/product-section-4_-2380x850-2-s.jpg';
import slide2 from '../../assets/image/product-section-3_-2380x850-2-s.jpg';
import slide3 from '../../assets/image/Terminator-banner_bg-3-small.jpg';
import slide4 from '../../assets/image/product-section-2_-2380x850-2-s.jpg';

const ITgame: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        style={{
          margin: '0 auto',
          width: '100%',
          height: '60vh',
        }}
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <ContentOverlay>
          <h2>
            {t('ITgame.h2')}
            <span>{t('ITgame.span')}</span>
            {t('ITgame.h2-1')}
          </h2>
          <p>{t('ITgame.p')}</p>
        </ContentOverlay>
        <SwiperSlide>
          <img
            src={slide1}
            alt="slide1"
            style={{
              backgroundSize: 'cover',
              width: '100%',
              objectFit: 'cover',
              height: '60vh',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="slide2"
            style={{
              backgroundSize: 'cover',
              width: '100%',
              objectFit: 'cover',
              height: '60vh',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="slide3"
            style={{
              backgroundSize: 'cover',
              width: '100%',
              objectFit: 'cover',
              height: '60vh',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt="slide4"
            style={{
              backgroundSize: 'cover',
              width: '100%',
              objectFit: 'cover',
              height: '60vh',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
 export default ITgame;