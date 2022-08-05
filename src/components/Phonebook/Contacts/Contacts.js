import React from 'react';
import ContactsItem from './Contacts.styled';
import InputFilter from '../Input/InputFilter/inputFilter';
import LabelFilter from '../Label/LabelFilter/LabelFilter';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';

const Contacts = ({ name, contactsList, onChange, value, onClickDelete }) => (
  <ContactsItem>
    <p>{name}</p>
    <LabelFilter title="Find contacts by name">
      <InputFilter onChange={onChange} value={value} />
    </LabelFilter>
    <ul>
      {contactsList.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name} {contact.number}
          </span>
          <ButtonDelete
            name="Delete"
            onClickDelete={onClickDelete}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  </ContactsItem>
);

export default Contacts;
