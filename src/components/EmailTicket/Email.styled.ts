import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const FormContainer = styled.div`
padding: 20px;
  background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(10px); /* ефект blur */
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StatusMessage = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const TicketFormContainer = styled.div`
  padding: 20px;
  background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(10px); /* ефект blur */
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

export const TicketForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TicketLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const TicketInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TicketTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TicketButton = styled(AntButton)`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  // cursor: pointer;
  transition: background 0.5s ease-in-out;

  &:hover,
  &:focus {
    background: linear-gradient(80deg, #ff7f50, #1e90ff, #ff096c, #d50082);
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
  margin-top: 20px;
  font-weight: bold;

`;