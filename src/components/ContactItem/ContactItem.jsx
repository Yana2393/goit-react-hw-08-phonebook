import React from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { deleteContact } from 'redux/operations.js';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };
    return (
      <li className={css.listItem}>
        {contact.name} : {contact.number}
        <button className={css.listItemBtn} onClick={onDelete}>Delete</button>
      </li>
    );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
