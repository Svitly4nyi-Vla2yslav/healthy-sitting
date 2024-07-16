import styled, { css } from 'styled-components';

export const MainSection = styled.section<{ background?: string }>`
  width: 100%;
  height: 100vh;
  ${(props) =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: opacity 0.5s ease;
    `}
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* рівень затемнення */
    z-index: 2;
  }
`;
