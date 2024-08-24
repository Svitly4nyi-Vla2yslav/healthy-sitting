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
import { useTranslation } from 'react-i18next';

const slides = [
  {
    id: 1,
    imageUrl:
      'https://www.navignostics.com/wp-content/uploads/Innosuisse-1200x936.png',
  },
  {
    id: 2,
    imageUrl:
      'data:image/png;base64,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',
  },
  {
    id: 3,
    imageUrl:
      'https://www.sipbb.ch/wp-content/uploads/2021/12/SHTC_Logo_RGB.jpg',
  },
  {
    id: 4,
    imageUrl:
      'https://media.istockphoto.com/id/508516479/de/foto/schweizer-flagge.jpg?s=612x612&w=0&k=20&c=6pT9zyLMP8Ij3RpHsj12Mm9ai1xSaEAUa6TYojBa-So=',
  },
  {
    id: 5,
    imageUrl:
      'https://www.sachsen-fernsehen.de/software/wp-content/uploads/2023/09/hostinger-homepage-baukasten-logo.jpg',
  },
  {
    id: 6,
    imageUrl:
      'https://www.navignostics.com/wp-content/uploads/Innosuisse-1200x936.png',
  },
  {
    id: 7,
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAn1BMVEX///8AuWMttmUAt10AuGDz/fkktF8otWIAtVcAtlp10qD8//7S8eHp+fIavWtGxH/G7tpRwoCl48IVslkjwHJhzZOM2rH3/vtaw4Ob37ut4MF/zp7f9enn+PDw+/aA1qih4L246c9rz5jY8uRIxoM3wXeG2KyV3bZVy43O8N6+6NCz48Zlz5Yxwnl61KRDvXVmxotJv3kAsk1xy5Vlx4twraDJAAAI7ElEQVR4nO2bC2OiOhOGwUQugoCKUj1yUUFAa223/f+/7SOZcLFeTnvEuvWbZ3dbxDAkL5PJJGQlCUEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBGmH+WK7XXTvXYt74qUWIYQmi3tX5I5MNCoXULq6d01ujdH3/ZPubshcAlnWo9MXBt4t6/WDrJYuteLoxDe+BhLIZHLiW2+4jMeT+Y1r9yM4lBRPmxLbPPqqf0mDmVtEiuJvdPsq3pyMiHbujiLfJQ0mFPoJtX7/qGEkos/LVHsODr87r8Hc1eXyMufH6noznqvWyCQ+7A9nNRi6pJKA+j9Y2Rsxt0ktgjwzGl+d0aD/otFaguUP1/cmdHuk0aTnRqA/rcGq6j2s/PBBhseN1XSFTeUKp8ZGb1IrJuvx4yRPq5g0Hm3VYKPUQBuWp/pZs+T4QZyA013S+unWLV7yjk+JVQ4Y/bgRQeWpccbcL2Wxq4OCVcaEbppYsuw+l8OFETa8IDtOqn47flZFe1L38iB38jpKenaVTOjpgzkBkFoi9dv1z5QwelVSufnRqv0cuaVTSvUq8wtMc1HgmJUnODKfXGjxAyRGZzCmWZyti54QrKa9HdU0TS8ofmluljqs3fOxK1vJ9t4VvSlB4EnGIowt0kgD+Dioy8nz0JcMf7V6XCcQeFNXO2x/pQPRtZe/JykKnDBcO1dmKMNwvV6Hw8OTC/u0AOWQYaXBaWs/jDe1NFI8lOG/F73EPyNFUUa9g3OhdkkB5gya/Te4QjeDpI5E19n5R+l0OkpTA29JLivAb+vWydG9coRutfITXWfoSIMiTSJfQJdzKG9OhwvTuEemsNZFpL5aA/WTBmk2rnjm/575b/hR/ip+LkVMGAbDXnplj/wvBJDYEzuTp9dZOvKDb3v2zJsNw/y6WvwXHO4Felp0inMp7Rc5jgffZeEtVtId+sKWRwOthdXco77wbbzij3SHNYQIukILEfl6P7gXEfcD2oYGV/tBe3RzZ7tZGZLR5dRfBPk2StOt01jm9DzQgLCShRfCJcId4QNTxyuPPNPZOIfvw7x8M9s6/U9+UF8brMx5tW5k5vPDXheYzmy2Ma8MRZ8IUtsqUnE3Ns3ELqiWKf1w0FEYnX2dpU/Ywg7zg9i2i+lbN2OX2PCGKOfHcVE9Y8JNTaRNXNiW3WVjyWfxwax23lKjqUH/fcDYSs77YJ/sB1Mmq98bJJ3907Tu8X6aWLRIEazkpcUXjStbvN8mcshm79QS9Z1ZCvNVhqooqahHr1zPYxP9SAoswg5giM7ZMZXnbK2DLwQsU53CgqA8KxvxMgKr6micNfpCf6CoqqqEk1Hxu6Oqo6e5tNmzGhTH43KiOLR0kUpTnUZtBcNFvawtrIMGxqRSgKOMwSV7jWSWMA3YVURoABbm1XqPVWf5Yl1kvlcqk2C/0kBtnGTnn4bVByWDyr4QUJTAW9peO5lyIFpO6+k6aJAqpQuIioi6NjSgZzTwG2telV3Cl8G9cWlWrdp3qEHRT9TqztXNR7xOC+6DZBdtJy6zqrezlCLWaYm9fImFHFyDlSKeysfydS8qwnORF/FsqWVZ8vBQA4cbsBoa0ME6hLdC1GJRzJRFy99e39RTGqid9/VT5Snj9QeUGrGAE/AFVb3H4mWfiUCTNhZTfBcG+15Rwe6wocGaa6AmefH08kSpHXK+mkCbVrlZxPYTGjT8gISFt/Z34oKiRA/MWhvf8BdUPdZgXzTWg1KdURFDDKiIwm6QQ/WgA2y4/TZSxCF/kUPEa8tULzXw4SklEB67e6gTqA5SUbjkYjygO7gAwmhhqwvOlUBIN/fNmPjEPqjv/MmMeDHQHAqxG0x0bnPC6VmNil/FCzwuMcz0aanBCtw0FMVm/GGMnIYGIk+8qIGoYs5votdmI2E2VD77gZKyY4P3GDgOnioNxkREGI5ci3wd3Cx1y4yk0iCnVS/krehUDilJU+jqJzT4HA9IryEN6wsm2CnHyehYA5iJynWxbq1BJsJ3DWlDAxG6RNJlVPFAPLBybrwBP4CWgh9o39WA+cEnDaYXNVBPa2C5DbIWNIC+oKfwaauVGkAvVG3hIBCkYIASGpz3g0ZfgOatKj8Q8eADkptgoH7LD9bc5qkdalexEUnBjNUq31V9wXuH0Lzkg/pUDBLQ7GlzzgQaiHfgKSRGwScNnMoPpAwGwJCbXR6MC0//qsGWNkKA4XFa0KAct0g2i5akMTZuRuC242ixzZSDUAZzZx008GBwpT2zGDShu7J9YgcamPXYGAlTb5NokijH+cFFDeb8XrCY3c3kIkGhodQCQ7HLgYpIW2ogiYSuyNRErqYOREISNWOiJBaCieWKpJuwPnomHkh9kRkVExDlVI50MR4YSxhks+EmtXUWG61WltGMxp6GZp54kNjzGsnl1A80EH4gmWWOXabafP50oi/AluPN6GAW8i0/kHyQmeoazJy0tA0Jig5dbQChckxrDaS53Zw0Kftq9nzoB9JWbr4SENsCTsREHcxGSamt2tl/U4NijltOG2W+I62ttwvGbKfpOtF1y3G0hgZSf5qMFDahVZWRvK5n6+kf9h74T3X/TaaRcrzWdrC3zliyQn8gR3I0foEwu+qxflDYTPL3EQMK+W/sWDxZjX8BGgz4+aiskyxuRnR32+YLltU0DSOTVZbHtOqJG076/vT0+jpZNOOv73AaZ/J1FheDtR2H1W7bOS8DlrpwQWVjtV5+vK4Lm31+Xqhr8g9+45hP1o15fcw/D3tj246z8Eav33liT92DBZog+MoA5AXz+bz/5Zeh1w1qRr/f5p59p/fCWINtyJztR9rv9gVyeL9HWcgJehDX/4513h9kAkOj5u52YuDZPfwmj890xYZpWv5vAPp/+N+n/OfmpgdCW0o7fhfGJNHF+E7k+PG2fn4NP1rGu51rZ+G1G4x+NQbn3rVAEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEOSR+R+NSp4lLB7/xAAAAABJRU5ErkJggg==',
  },
  {
    id: 8,
    imageUrl:
      'https://www.sipbb.ch/wp-content/uploads/2021/12/SHTC_Logo_RGB.jpg',
  },
  {
    id: 9,
    imageUrl:
      'https://www.sachsen-fernsehen.de/software/wp-content/uploads/2023/09/hostinger-homepage-baukasten-logo.jpg',
  },
];

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const slidesPerView = isMobile ? 2 : isTablet ? 4 : isDesktop ? 7 : 7;
  return (
    <SwiperContainer>
      <TextWraper>
        <TitelPartners>{t('Partners.PartnersH2')}</TitelPartners>
        <TextPartners>{t('Partners.PartnersP')}</TextPartners>
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
                loading="lazy"
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
export default Partners;
