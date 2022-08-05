import React from 'react';
import ContactsItem from './Contacts.styled';

const Contacts = ({ name, contactsList }) => (
  <ContactsItem>
    <p>{name}</p>
    <ul>
      {contactsList.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name} {contact.number}
          </span>
        </li>
      ))}
    </ul>
  </ContactsItem>
);

export default Contacts;
