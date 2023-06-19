import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
// import css from '../ContactForm/ContactForm.module.css';
import css from './Regestration.module.css'

export const RegestrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(registerUser(user));
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.registerForm} onSubmit={handleSubmit}>
        <p className={css.txt}>Name</p>
        <input className={css.input} type="text" name="name" required />
        <p className={css.txt}>Email</p>
        <input className={css.input} type="email" name="email" required />
        <p className={css.txt}>Password</p>
      <input className={css.input} type="password" name="password" required />
      <button className={css.button} type="submit">Sign Up</button>
    </form>
    </div>
    
  );
};
