import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

import './jquery.d.ts';
import { GlobalStyle, Wrapper, Intro, IntroH1, IntroP, Content, Section, GradientSection, Test, ImageContainer, StyledImage } from './ContentHomePage.styled.ts';

const CodeCrafter: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
          markers: false,
        },
      })
      .to('img', {
        scale: 2,
        z: 250,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      })
      .to(
        '.section.hero',
        {
          scale: 1.4,
          transformOrigin: 'center center',
          ease: 'power1.inOut',
        },
        '<'
      );

    $.fn.extend({
      darkenScroll: function (this: JQuery<HTMLElement>) {
        const elem = $(this);
        $(window).on('scroll', function () {
          const scroll = $(document).scrollTop() ?? 0;
          const offsetTop =
            (elem.offset()?.top ?? 0) + (elem.outerHeight() ?? 0);
          const opacity = (1 / offsetTop) * scroll;
          if (opacity > 0 && opacity < 1) {
            elem.css({
              'box-shadow': `10000px 0 0 0 rgba(0,0,0,${opacity}) inset`,
            });
          }
        });
        return this;
      },
    });

    $('.section.hero').darkenScroll();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper className="wrapper">
        <Intro>
          <IntroH1>The Story of</IntroH1>
          <IntroP>something very spooky</IntroP>
        </Intro>
        <Content className="content">
          <Section
            className="section hero"
            background="https://images.unsplash.com/photo-1512747646639-ed824d861e0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <GradientSection className="section gradient-purple" />
          <GradientSection className="section gradient-blue">
            <Test>
              <p>In the shadowed depths of yon ancient keep, </p>
              <p>lurketh secrets darker than the night.</p>
              <p>Beware, for in the forgotten corners of this cursed realm,</p>
              <p>doth dwell entities of eldritch horror,</p>
              <p>
                their eerie whispers echoing through the corridors like the
                lamentations of souls long departed.
              </p>
            </Test>
          </GradientSection>
        </Content>
        <ImageContainer>
          <StyledImage
            src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
            alt="image"
          />
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default CodeCrafter;
