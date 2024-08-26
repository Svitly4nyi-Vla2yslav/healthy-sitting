// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import {
  CustomNextButton,
  CustomPrevButton,
  Data,
  SlideContainer,
  SlideContent,
  SwiperContainer,
  TextPartners,
  TextWraper,
  TitelPartners,
} from './Feedback.styled';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const Feedback: React.FC = () => {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      text: t('Feedback.id-1.text'),
      data: '11.07.2024',
      hashtag: t('Feedback.id-1.hashtag'),
    },
    {
      id: 2,
      text: t('Feedback.id-2.text'),
      data: '14.06.2024',
      hashtag: t('Feedback.id-2.hashtag'),
    },
    {
      id: 3,
      text: t('Feedback.id-3.text'),
      data: '11.05.2024',
      hashtag: t('Feedback.id-3.hashtag'),
    },
    {
      id: 4,
      text: t('Feedback.id-4.text'),
      data: '18.04.2024',
      hashtag: t('Feedback.id-4.hashtag'),
    },
    {
      id: 5,
      text: t('Feedback.id-5.text'),
      data: '11.03.2024',
      hashtag: t('Feedback.id-5.hashtag'),
    },
    {
      id: 6,
      text: t('Feedback.id-6.text'),
      data: '21.02.2024',
      hashtag: t('Feedback.id-6.hashtag'),
    },
    {
      id: 7,
      text: t('Feedback.id-7.text'),
      data: '21.02.2024',
      hashtag: t('Feedback.id-7.hashtag'),
    },
    {
      id: 8,
      text: t('Feedback.id-8.text'),
      data: '21.02.2024',
      hashtag: t('Feedback.id-8.hashtag'),
    },
    {
      id: 9,
      text: t('Feedback.id-9.text'),
      data: '21.02.2024',
      hashtag: t('Feedback.id-9.hashtag'),
    },
  ];

  const isMobile = useMediaQuery({ query: '(max-width: 400px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 400px) and (max-width: 768px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 1 : isDesktop ? 3 : 3;

  return (
    <SwiperContainer>
      <TextWraper>
        <TitelPartners>{t('Feedback.TitelH2')}</TitelPartners>
        <TextPartners>{t('Feedback.TextP')}</TextPartners>
      </TextWraper>
      <Swiper
        style={{ margin: '0 50px' }}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{}}>
            <SlideContainer>
              <SlideContent
                style={{
                  color: 'black',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'nowrap',
                  fontSize: 30,
                  height: '100%',
                }}
              >
                <Data>{slide.data}</Data>
                {slide.hashtag}
              </SlideContent>
              <SlideContent
                style={{
                  borderTop: '1px solid #01cbe1',
                  height: '15%',
                  marginTop: '30%',
                }}
              >
                {slide.text}
              </SlideContent>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPrevButton className="custom-prev">
        <ArrowCircleLeftIcon
          style={{
            width: 50,
            height: 50,
            fill: '#01cbe1',
            background: 'white',
            borderRadius: 50,
          }}
        />
      </CustomPrevButton>
      <CustomNextButton className="custom-next">
        <ArrowCircleRightIcon
          style={{
            width: 50,
            height: 50,
            fill: '#01cbe1',
            background: 'white',
            borderRadius: 50,
          }}
        />
      </CustomNextButton>
    </SwiperContainer>
  );
};
export default Feedback;
