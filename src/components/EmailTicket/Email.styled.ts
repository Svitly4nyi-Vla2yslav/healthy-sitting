import styled from 'styled-components';


export const FormTitel = styled.h2`
font-family: 'Roboto';
font-size: 24px;
text-align: center;
padding: 5px;
font-weight: 900;
border-bottom: 1px solid #00baff;
margin-bottom: 50px;
max-width: 320px;
margin: 0 auto;
 font-weight: bold;
 margin-bottom: 20px;
`;

export const FormText = styled.p`
font-family: 'Roboto';
font-size: 14px;
text-align: center;
padding: 15px;
font-weight: 600;
border-top: 1px solid #00baff;
margin-bottom: 50px;
max-width: 320px;
margin: 0 auto;
 font-weight: bold;
 margin-top: 20px;
`;

export const FormContainer = styled.div`
padding: 20px;
  background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(10px); /* ефект blur */
  border-radius: 10px;
  max-width: 500px;
  width: 300px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
font-family: 'Roboto';
  font-weight: bold;
  color: #1e90ff;
  // background: linear-gradient(90deg, #ff7f50, #1e90ff);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // background-clip: text;
  // text-fill-color: transparent;
  text-align: center;
  // padding : 15px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
    background-color: rgba(249, 249, 249, 0); /* півпрозорий фон */
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  // cursor: pointer;
  transition: background 0.5s ease-in-out;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
    background-size: 400% 400%;
    animation: gradientAnimation 3s ease infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const StatusMessage = styled.p`
  // margin-top: 20px;
  font-weight: bold;
`;

// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const TicketFormContainer = styled.div`
  padding: 20px;
  background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(10px); /* ефект blur */
  border-radius: 10px;
 max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
`;

export const TicketForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TicketLabel = styled.label`
  margin-bottom: 10px;
font-family: 'Roboto';
text-align: start;
 font-weight: bold;
 
`;

export const TicketInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
    background-color: rgba(249, 249, 249, 0);
`;

export const TicketTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
    background-color: rgba(249, 249, 249, 0);
    width: 100%;

`;

export const TicketButton = styled.button`
   padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  // cursor: pointer;
  transition: background 0.5s ease-in-out;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #ff7f50, #1e90ff, #ff7f50, #1e90ff);
    background-size: 400% 400%;
    animation: gradientAnimation 3s ease infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const TicketStatusMessage = styled.p`
  // margin-top: 20px;
  // font-weight: bold;
  color: #ff4141;

`;