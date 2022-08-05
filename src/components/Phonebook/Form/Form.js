import React from 'react';
import Form from './Form.styled';

const FormPhonebook = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default FormPhonebook;
