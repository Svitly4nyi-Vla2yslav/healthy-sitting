import React, { useState } from 'react';
import styled from 'styled-components';

// Стилі для компонента
const FormContainer = styled.div`
  padding: 20px;
  background-color: transparent;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
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

const StatusMessage = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

const Subscribe: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('Form submission successful');
        form.reset();
      } else {
        setStatus('Form submission failed');
      }
    } catch (error) {
      setStatus('Form submission failed');
    }
  };

  return (
    <FormContainer>
      <Form name="subscribe" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="subscribe" />
        <Label>
          Your Name: <Input type="text" name="name" />
        </Label>
        <Label>
          Your Email: <Input type="email" name="email" />
        </Label>
        <Button type="submit">Send</Button>
      </Form>
      {status && <StatusMessage>{status}</StatusMessage>}
    </FormContainer>
  );
};

export default Subscribe;