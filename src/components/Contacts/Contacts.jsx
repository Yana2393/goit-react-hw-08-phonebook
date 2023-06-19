import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from '../App.module.css';
import { fetchContacts } from 'redux/operations';


export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.formWrapper}>
        <h1 className={css.formTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.formTitle}>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        <ContactList />
      </div>
    </>
  );
};
