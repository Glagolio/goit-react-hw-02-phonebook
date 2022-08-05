import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';

const ButtonDelete = ({ name, onClickDelete, id }) => (
  <ButtonDeleteStyle type="button" onClick={onClickDelete} id={id}>
    {name}
  </ButtonDeleteStyle>
);

export default ButtonDelete;
