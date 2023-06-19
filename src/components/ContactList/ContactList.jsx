import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import css from './ContactList.module.css'


function ContactList() {
  const {contacts} = useSelector(getContacts);
  const {filter} = useSelector(getFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  
  return (
    <ul className={css.contactList}>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      </ul>
  );
}

export default ContactList;