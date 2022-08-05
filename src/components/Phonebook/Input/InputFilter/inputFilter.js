import React from 'react';
import Input from '../Input.styled';

const InputFilter = ({ onChange, value }) => (
  <>
    <Input
      type="text"
      name="filter"
      placeholder="Find contact"
      onChange={onChange}
      value={value}
    />
  </>
);

export default InputFilter;
