import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  SwiperContainer,
  TextPartners,
  TextWraper,
  TitelPartners,
} from './Partners.styled';

import { useMediaQuery } from 'react-responsive';

const slides = [
  { id: 1, imageUrl: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { id: 2, imageUrl: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { id: 3, imageUrl: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { id: 4, imageUrl: 'https://swiperjs.com/demos/images/nature-4.jpg' },
  { id: 5, imageUrl: 'https://swiperjs.com/demos/images/nature-5.jpg' },
  { id: 6, imageUrl: 'https://swiperjs.com/demos/images/nature-6.jpg' },
  { id: 7, imageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },
  { id: 8, imageUrl: 'https://swiperjs.com/demos/images/nature-8.jpg' },
  { id: 9, imageUrl: 'https://swiperjs.com/demos/images/nature-9.jpg' },
];

export const Partners: React.FC = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 375px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const slidesPerView = isMobile ? 2 : isTablet ? 4 : isDesktop ? 7 : 7;
  return (
    <SwiperContainer>
      <TextWraper>
        <TitelPartners>
          Companies that care about the health of their employees
        </TitelPartners>
        <TextPartners>
          External partners and corporate donors supporting the project.
        </TextPartners>
      </TextWraper>
      <Swiper
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        navigation={false}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={false}
        grabCursor={true}
        speed={4000}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 2 }).map((_, i) =>
          slides.map((slide) => (
            <SwiperSlide
              key={`${slide.id}-${i}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh',
                fontSize: 36,
                paddingBottom: 50,
              }}
            >
              <img
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </SwiperContainer>
  );
};
