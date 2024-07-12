import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Message } from './Message';
import { Button, Form, FormContainer, Input, Label } from './Email.styled';


const Subscribe: React.FC = () => {
  const [state, handleSubmit] = useForm('xkgwgjzn');
  if (state.succeeded) {
    return <Message/>;
  }

  return (
    <FormContainer>
      <Form
        name="subscribe"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <Label>
          Your Name: <Input type="text" name="name" />{' '}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Label>
        <Label>
          Your Email: <Input type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Label>
        <Button type="submit" disabled={state.submitting}>
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Subscribe;
