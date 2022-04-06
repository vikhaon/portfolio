import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormTitle,
  FormLabel,
  FormInputRow,
  FormButton,
  FormMessage,
  FormTextArea,
} from './FormStyles';
import { Container } from '../../styles/globalStyles';
import validateForm from './validateForm';

const Form = ({ toggleModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, subject, message });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setError(null);
    setSuccess('Message was sent!');

    setTimeout(() => {
      toggleModal();
    }, 3000);
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: 'Name',
      name: 'name',
      value: name,
      onChange: (e) => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'Email',
      name: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: 'email',
    },
    {
      label: 'Subject',
      name: 'subject',
      value: subject,
      onChange: (e) => setSubject(e.target.value),
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Get in touch</FormTitle>
            <FormWrapper ref={formRef} onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label} *</FormLabel>
                  <FormInput
                    type={el.type}
                    name={el.name}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
              <FormTextArea
                type='text'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Message *'
              />
              <FormButton type='submit'>Let's talk</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage variants={messageVariants} initial='hidden' animate='animate'>
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
