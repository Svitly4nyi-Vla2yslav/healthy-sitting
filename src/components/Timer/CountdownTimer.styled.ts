import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif; 
  color: #00ffcc;
flex-wrap: wrap;
margin: 0 auto;
  margin-top: 30px;
    gap: 10px;
      @media screen and (min-width: 1240px){
display: flex;
        flex-wrap: nowrap;
}
`;

export const TimeBox = styled.div`
 margin: 0 auto;
padding: 20px;
  margin: 0 10px;
  text-align: center;
   font-size: 3.75em;
     justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif; 
   background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(10px); /* ефект blur */
  border-radius: 10px;
 width: 216px;
 
`;

export const Label = styled.span`
  display: block;
  font-size: 0.75em;
  color: #ffffff;
`;