// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

export const SwiperCub: React.FC = () => {
  return (
    <>
      <Swiper
        style={{ maxWidth: 380, maxHeight: 380 }}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ maxWidth: 380, maxHeight: 380 }}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 380, maxHeight: 380 }}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 380, maxHeight: 380 }}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 380, maxHeight: 380 }}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 380, maxHeight: 380 }}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 380, maxHeight: 380 }}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 380, maxHeight: 380 }}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};
