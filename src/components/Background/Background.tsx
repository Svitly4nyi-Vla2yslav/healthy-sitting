import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-scroll';

// Import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';

import bg1_1_large from '../../assets/image/Terminator_productlist_banner-3.jpg';
import bg1_1_small from '../../assets/image/hero-image.jpg';
import bg1_2_large from '../../assets/image/index-banner2-armorevo-2.jpg';
import bg1_2_small from '../../assets/image/07-1.png';
import bg1_small from '../../assets/image/Terminator-banner_bg-3-small.jpg';
import bg1_large from '../../assets/image/product-section-2_-2380x850-2.jpg';
import bg2_small from '../../assets/image/Terminator-product-section-1_-2380x850-3-small.jpg';
import bg2_large from '../../assets/image/product-section-4_-2380x850-2.jpg';
import bg3_small from '../../assets/image/product-section-4_-2380x850-2-small.jpg';
import bg3_large from '../../assets/image/Terminator-product-section_8-2380x850-3.jpg';
import bg4_small from '../../assets/image/product-section_-2380x1200-2-small.jpg';
import bg4_large from '../../assets/image/Terminator-product-section-7_-2380x850-3.jpg';

import { useTranslation } from 'react-i18next';

import {
  ArrowWrapper,
  ButtonDown,
  TextHomeContainer,
  SlideContent,
  SlideText,
  SlideImage,
  SlideTitel,
} from './Background.styled';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Background: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t } = useTranslation();  // Use useTranslation to get the translation function

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      style={{ marginTop: 76 }}
    >
      <Swiper
        style={{
          width: '100%',
          position: 'relative',
          backgroundColor: 'black',
        }}
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7500, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContent>
            <SlideImage
              style={{
                height: windowWidth < 769 ? 297 : 'auto',
                objectFit: 'cover',
              }}
              src={windowWidth > 768 ? bg1_1_large : bg1_1_small}
              alt="Slide 1 - 1"
            />
            <SlideTitel>{t('Background.slide1Text')}</SlideTitel>
            <SlideText>{t('Background.slide1Description')}</SlideText>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <SlideImage
              style={{
                height: windowWidth < 769 ? 297 : 'auto',
                backgroundColor: 'black',
                objectFit: 'cover',
              }}
              src={windowWidth > 768 ? bg1_2_large : bg1_2_small}
              alt="Slide 1 - 2"
            />
            <SlideTitel>{t('Background.slide2Text')}</SlideTitel>
            <SlideText>{t('Background.slide2Description')}</SlideText>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <SlideImage
              style={{
                height: windowWidth < 769 ? 297 : 'auto',
                objectFit: 'cover',
              }}
              src={windowWidth > 768 ? bg1_large : bg1_small}
              alt="Slide 1"
            />
            <SlideTitel>{t('Background.slide3Text')}</SlideTitel>
            <SlideText>{t('Background.slide3Description')}</SlideText>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <SlideImage
              style={{
                height: windowWidth < 769 ? 297 : 'auto',
                objectFit: 'cover',
              }}
              src={windowWidth > 768 ? bg2_large : bg2_small}
              alt="Slide 2"
            />
            <SlideTitel>{t('Background.slide4Text')}</SlideTitel>
            <SlideText>{t('Background.slide4Description')}</SlideText>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <SlideImage
              style={{
                height: windowWidth < 769 ? 297 : 'auto',
                objectFit: 'cover',
              }}
              src={windowWidth > 768 ? bg3_large : bg3_small}
              alt="Slide 3"
            />
            <SlideTitel>{t('Background.slide5Text')}</SlideTitel>
            <SlideText>{t('Background.slide5Description')}</SlideText>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <SlideImage
              style={{
                height: windowWidth < 769 ? 297 : 'auto',
                objectFit: 'cover',
              }}
              src={windowWidth > 768 ? bg4_large : bg4_small}
              alt="Slide 4"
            />
            <SlideTitel>{t('Background.slide6Text')}</SlideTitel>
            <SlideText>{t('Background.slide6Description')}</SlideText>
          </SlideContent>
        </SwiperSlide>
      </Swiper>

      <TextHomeContainer>
        <Link to="video" smooth={true} duration={1000}>
          <ButtonDown>
            {t('Background.scrollDown')}
            <ArrowWrapper>
              <KeyboardDoubleArrowDownIcon style={{ fontSize: 50 }} />
            </ArrowWrapper>
          </ButtonDown>
        </Link>
      </TextHomeContainer>
    </div>
  );
};

export default Background;
