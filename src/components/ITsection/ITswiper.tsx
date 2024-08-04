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
import { ContentOverlay } from '../../pages/HomePage/HomePage.styled';

import { useTranslation } from 'react-i18next';

import slide1 from '../../assets/image/partners/SHTC_Logo_RGB.webp';
import slide2 from '../../assets/image/partners/SHTC.webp';
import slide3 from '../../assets/image/partners/Innosuisse-1200x936.webp';
import slide4 from '../../assets/image/partners/4.webp';

const ITswiper: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        style={{
          margin: '0 auto',
          width: '100%',
          height: '60vh',
          objectFit: 'cover',
        }}
        spaceBetween={30}
        loop={true}
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
          <h2>{t('ITswiper.h2')}</h2>
          <p>{t('ITswiper.p')}</p>
        </ContentOverlay>
        <SwiperSlide>
          <img
            src={slide1}
            alt="slide1"
            style={{
              backgroundSize: 'cover',
              width: '100%',
              objectFit: 'cover',
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
              height: '60vh',
              objectFit: 'cover',
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
              height: '60vh',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default ITswiper;
