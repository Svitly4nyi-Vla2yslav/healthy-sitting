import styled from "styled-components";

export const ContactContainer = styled.div`
   width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
   background-attachment: fixed; 
  @media screen and (min-width: 768px){
  // height: 100vh;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
     padding-top: 100px;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 300px;
    margin : 0 auto;
    pading: 5px;
`;