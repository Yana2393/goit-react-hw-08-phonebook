import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.formWrapper}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.formTitle}>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      <ContactList />
    </div>
  );
};

export default App;