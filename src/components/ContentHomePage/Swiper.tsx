// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

import cub1 from '../../assets/image/11zon_compressed/cub1-1_2_11zon.webp';
import cub2 from '../../assets/image/11zon_compressed/cub9_10_11zon.webp';
import cub3 from '../../assets/image/11zon_compressed/cub8_9_11zon.webp';
import cub4 from '../../assets/image/11zon_compressed/cub7_8_11zon.webp';
import cub5 from '../../assets/image/11zon_compressed/cub6_7_11zon.webp';
import cub6 from '../../assets/image/11zon_compressed/cub5_6_11zon.webp';
import cub7 from '../../assets/image/11zon_compressed/cub4_5_11zon.webp';

export const SwiperCub: React.FC = () => {
  return (
    <>
      <Swiper
        style={{ width: 380, height: 380, objectFit: "cover"   }}
        effect={'cube'}
        grabCursor={true}
        loop={true}
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
        <SwiperSlide>
          <img src={cub1} alt='cub1' style={{ width: 380, height: 380, objectFit: "cover"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={cub2} alt='cub2'  style={{ width: 380, height: 380, objectFit: "cover"}}/>
        </SwiperSlide>
        <SwiperSlide >
        <img src={cub3} alt='cub3'  style={{ width: 380, height: 380, objectFit: "cover"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={cub4} alt='cub4'  style={{ width: 380, height: 380, objectFit: "cover"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={cub5} alt='cub5'  style={{ width: 380, height: 380, objectFit: "cover"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={cub6} alt='cub6'  style={{ width: 380, height: 380, objectFit: "cover"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={cub7} alt='cub7'  style={{ width: 380, height: 380, objectFit: "cover"}}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
