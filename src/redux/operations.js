import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosContacts = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    axiosContacts.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosContacts.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    try {
      token.set(persistToken);
      const { data } = await axiosContacts.get('/contacts');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axiosContacts.post('/contacts', contact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosContacts.delete(`/contacts/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
