import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authOperations';
import css from './Regestration.module.css'


export const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logInUser(user));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.registerForm} onSubmit={handleSubmit}>
      <p className={css.txt}>Email</p>
      <input className={css.input}
        type="email"
        name="email"
        value={email}
        required
        onChange={handleChange}
      />
      <p className={css.txt}>Password</p>
      <input className={css.input}
        type="password"
        name="password"
        value={password}
        required
        onChange={handleChange}
      />
      <button className={css.button} type="submit">Login</button>
    </form>
  );
};
