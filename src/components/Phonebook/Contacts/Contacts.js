import React from 'react';
import ContactsItem from './Contacts.styled';

const Contacts = ({ name, contactsList }) => (
  <ContactsItem>
    <p>{name}</p>
    <ul>
      {contactsList.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  </ContactsItem>
);

export default Contacts;
