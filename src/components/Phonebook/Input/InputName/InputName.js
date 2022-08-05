import React from 'react';
import Input from '../Input.styled';

const InputName = ({ handleChange }) => (
  <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    placeholder="Enter name"
    onChange={handleChange}
  />
);

export default InputName
