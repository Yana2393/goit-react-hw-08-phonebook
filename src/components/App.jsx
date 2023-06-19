import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { RegestrationPage } from './Regestration/RegestrationPage';
import { RestrictedRoute } from './Regestration/Routes/RestrictedRoute';
import Home from './Home/Home';
import { PrivateRoute } from './Regestration/Routes/PrivateRoute';
import { logOutUser, refreshUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectIsRefresh } from 'redux/auth/authSelectors';
import { LogInPage } from './Regestration/LogIn';
import css from './App.module.css'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    dispatch(logOutUser());
  };

  return isRefresh ? (
    <p>Refreshing User</p>
  ) : (
      <div className={css.wrapper}>
      <nav className={css.homeNav}>
        <Link to="/" className={css.homeLink}>Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/contacts" className={css.homeLink}>Contacts</Link>
            <button onClick={handleClick} className={css.homeBtn}>Log Out</button>
          </>
        ) : (
          <>
            <Link to="/registration" className={css.homeLink}>Registration</Link>
            <Link to="/login" className={css.homeLink}>Login</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<RestrictedRoute />}>
          <Route path="registration" element={<RegestrationPage />} />
          <Route path="login" element={<LogInPage />} />
        </Route>
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/registration" component={<Contacts />} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
