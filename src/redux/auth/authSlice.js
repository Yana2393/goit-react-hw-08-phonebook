import { createSlice } from '@reduxjs/toolkit';
import { logInUser, logOutUser, refreshUser, registerUser } from './authOperations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending]: state => {
      state.isRefresh = true;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.isRefresh = false;
      state.isLoggedIn = true;
      state.user = payload;
    },
    [refreshUser.rejected]: state => {
      state.isRefresh = false;
    },
  },
});

export const authReducer = authSlice.reducer;
