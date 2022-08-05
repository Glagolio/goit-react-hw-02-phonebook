import React from 'react';
import Label from './Label.styled';

const LabelPhoneBook = ({ title, children }) => (
  <Label>
    <span>{title}</span>
    {children}
  </Label>
);

export default LabelPhoneBook;
