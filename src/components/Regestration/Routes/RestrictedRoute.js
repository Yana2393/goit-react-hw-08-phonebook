import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={location.state?.login ?? '/'} />
  );
};
