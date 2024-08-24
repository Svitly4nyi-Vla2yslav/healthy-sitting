// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  CustomNextButton,
  CustomPrevButton,
  Data,
  SlideBackground,
  SlideContainer,
  SlideContent,
  SlideLink,
  SwiperContainer,
  TextPartners,
  TextWraper,
  TitelPartners,
} from './News.styled';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import OutboundIcon from '@mui/icons-material/Outbound';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const slides = [
  {
    id: 1,
    imageUrl: 'https://swiperjs.com/demos/images/nature-1.jpg',
    link: '*',
    text: (t("News.id-1")),
    data: '11.07.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 2,
    imageUrl: 'https://swiperjs.com/demos/images/nature-2.jpg',
    link: '#',
    text: (t("News.id-2")),
    data: '14.06.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 3,
    imageUrl: 'https://swiperjs.com/demos/images/nature-3.jpg',
    link: '#',
    text: (t("News.id-3")),
    data: '11.05.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 4,
    imageUrl: 'https://swiperjs.com/demos/images/nature-4.jpg',
    link: '#',
    text: (t("News.id-4")),
    data: '18.04.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 5,
    imageUrl: 'https://swiperjs.com/demos/images/nature-5.jpg',
    link: '#',
    text: (t("News.id-5")),
    data: '11.03.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 6,
    imageUrl: 'https://swiperjs.com/demos/images/nature-6.jpg',
    link: '#',
    text: (t("News.id-6")),
    data: '21.02.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 7,
    imageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg',
    link: '#',
    text: (t("News.id-7")),
    data: '21.02.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 8,
    imageUrl: 'https://swiperjs.com/demos/images/nature-8.jpg',
    link: '#',
    text: (t("News.id-8")),
    data: '21.02.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
  {
    id: 9,
    imageUrl: 'https://swiperjs.com/demos/images/nature-9.jpg',
    link: '#',
    text: (t("News.id-9")),
    data: '21.02.2024',
    hashtag: '# hash·​tag ˈhash-ˌtag. Social Link / YouTube/ Instagram😇',
  },
];

const News: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 4;
  const { t } = useTranslation();
  return (
    <SwiperContainer>
      <TextWraper>
        <TitelPartners>{t("News.TitelH2")}</TitelPartners>
        <TextPartners>
        {t("News.NewsP")}
        </TextPartners>
      </TextWraper>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        centeredSlides={true}
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
              <SlideLink href={slide.link}>
                <SlideBackground $backgroundimage={slide.imageUrl}/>
                <SlideContent
                  style={{
                    color: '#ccc',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'nowrap',
                  }}
                >
                  <Data>{slide.data}</Data>
                  {slide.hashtag}
                </SlideContent>
                <SlideContent>
                  <OutboundIcon
                    style={{
                      marginRight: 15,
                      width: 35,
                      height: 35,
                      background: 'white',
                      borderRadius: 50,
                    }}
                  />
                  {slide.text}
                </SlideContent>
              </SlideLink>
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
export default News;
