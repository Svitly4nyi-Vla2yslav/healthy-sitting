// import React, { useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';

// const v1 = 'calc(max(2vw, 1vh))';

// const Container = styled.div`
//   position: fixed;
//   height: 100vh;
//   overflow: hidden;
//   z-index: 14;
// `;

// const Row = styled.div`
//   display: inline-flex;
//   margin-top: calc(${v1} * -0.32);
//   margin-left: calc(${v1} * -0.5);

//   &:nth-child(even) {
//     margin-left: calc(${v1} * 0.02);
//   }
// `;

// const Hexagon = styled.div`
//   position: relative;
//   width: ${v1};
//   height: calc(${v1} * 1.1);
//   margin: calc(${v1} * 0.04) calc(${v1} * 0.02);
//   clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//   background: #2c093a;
//   text-align: center;
//   color: rgba(15, 15, 15, 1);
//   line-height: calc(${v1} * 1.1);
//   font-size: 2vw;
//   transition: 1s;

//   &.blank {
//     background: transparent;
//   }
// `;

// const HexagonButton = styled.button`
//   border: none;
//   cursor: pointer;
//   width: ${v1};
//   height: calc(${v1} * 1.1);
//   margin: calc(${v1} * 0.04) calc(${v1} * 0.02);
//   clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//   background: #2c093aa9;
//   text-align: center;
//   color: rgba(15, 15, 15, 1);
//   line-height: calc(${v1} * 1.1);
//   font-size: 2vw;
//   transition: 1s;

//   &:hover {
//     color: rgba(25, 25, 25, 1);
//     background: #2c093a40;
//   }
// `;

// const anim = keyframes`
//   0% {
//     filter: hue-rotate(0deg);
//   }
//   100% {
//     filter: hue-rotate(360deg);
//   }
// `;

// const Curser = styled.div`
//   position: absolute;
//   width: calc(${v1} * 2.5);
//   height: calc(${v1} * 2.5);
//   border-radius: 50%;
//   animation: ${anim} 2s linear infinite;
//   visibility: hidden;
//   transform: translate(-50%, -50%);
// `;

// const Background: React.FC = () => {
//   useEffect(() => {
//     const curser = document.querySelector('.curser') as HTMLDivElement;
//     const handleMouseMove = (e: MouseEvent) => {
//       let X = e.clientX;
//       let Y = e.clientY;

//       if (curser) {
//         curser.style.left = `${X}px`;
//         curser.style.top = `${Y}px`;
//       }
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <Container>
//       <Curser className="curser" />
//       {Array.from({ length: 9 }).map((_, rowIndex) => (
//         <Row key={rowIndex}>
//           {Array.from({ length: 156 }).map((_, hexIndex) => (
//             hexIndex === 5 && rowIndex === 4 ? (
//               <HexagonButton key={hexIndex}>Hi</HexagonButton>
//             ) : (
//               <Hexagon key={hexIndex} />
//             )
//           ))}
//         </Row>
//       ))}
//     </Container>
//   );
// };

// export default Background;