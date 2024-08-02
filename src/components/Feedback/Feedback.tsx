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

const slides = [
  {
    id: 1,
    text: 'John Doe, CEO of Tech Innovators',
    data: '11.07.2024',
    hashtag:
      '#CURA is a smart solution for everyone. Thanks for the great work!👏',
  },
  {
    id: 2,
    text: 'Jane Smith, Founder of Startup Hub',
    data: '14.06.2024',
    hashtag: '#CURA is changing our lives. Great team and product!🤩🤩🤩',
  },
  {
    id: 3,
    text: 'Alice Johnson, Tech Entrepreneur',
    data: '11.05.2024',
    hashtag: '#CURA helps people every day. Bravo for such innovation!👏🫡',
  },
  {
    id: 4,
    text: 'Michael Brown, Investor at Future Ventures',
    data: '18.04.2024',
    hashtag: '#CURA is awesome! Great work and potential!😻',
  },
  {
    id: 5,
    text: 'Emily Davis, CEO of Smart Solutions',
    data: '11.03.2024',
    hashtag: '#CURA is a game-changer. Amazing team!💙💛',
  },
  {
    id: 6,
    text: 'Daniel Wilson, Co-Founder of NextGen Startups',
    data: '21.02.2024',
    hashtag: '#CURA chairs are incredible! Thanks for the quality!',
  },
  {
    id: 7,
    text: 'Sophia Miller, Serial Entrepreneur',
    data: '21.02.2024',
    hashtag: '#CURA is a brilliant idea! Excellent product and service!😉',
  },
  {
    id: 8,
    text: 'James Anderson, Tech Investor',
    data: '21.02.2024',
    hashtag: '#CURA enhances comfort. Great innovation for all!',
  },
  {
    id: 9,
    text: 'Linda Martinez, Founder of Wellness Tech',
    data: '21.02.2024',
    hashtag: '#CURA is a great idea for the office. Thanks for your work!',
  },
];

const Feedback: React.FC = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 400px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 400px) and (max-width: 768px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 1 : isDesktop ? 3 : 3;

  return (
    <SwiperContainer >
      <TextWraper>
        <TitelPartners>Feedback & support</TitelPartners>
        <TextPartners>
          Real user reviews and endorsements from well-known individuals and
          organisations.
        </TextPartners>
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
                style={{ borderTop: '1px solid #01cbe1', height: '15%', marginTop: "30%" }}
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