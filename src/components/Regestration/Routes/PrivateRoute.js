import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefresh } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefresh = useSelector(selectIsRefresh);
    const shoudRedirect = !isLoggedIn && !isRefresh;

  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
};