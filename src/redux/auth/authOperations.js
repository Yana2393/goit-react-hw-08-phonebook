import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set(token) {
    axiosUser.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosUser.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosUser.post('users/signup', user);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        console.log('state', state)
      const persistToken = state.auth.token;
      console.log('persistToken', persistToken)
    if (!persistToken) {
      return thunkAPI.rejectWithValue('No token');
    }
      try {
        console.log(123)
      token.set(persistToken);
      const { data } = await axiosUser.get('users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosUser.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      await axiosUser.post('/users/logout');
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);