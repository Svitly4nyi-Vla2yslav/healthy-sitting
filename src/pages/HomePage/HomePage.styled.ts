import styled from '@emotion/styled';

export const SwipperWrapper = styled.div`
// margin: 0 auto;
// width: 100%;
// height: 10vh;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
  margin-top: 500px ;
 @media (min-width: 1024px) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 1px;
  margin: 50px auto 0 auto;
}
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
  background-color: #01283c66;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  
  h2 {
    font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 0 0 .5em;
    text-transform: uppercase;
    font-size: 3rem;
    line-height: 1;
  }

  p {
   font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 0 0 .5em;
            font-size: 1.8rem;
  }
  span{
    font-weight: 600;
    line-height: .85;
    }

  @media (max-width: 768px) {
    top: 1%; /* or other value that fits your design */
    transform: translate(-50%, 0);
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
