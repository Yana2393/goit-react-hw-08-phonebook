import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://6489a3a35fa58521caaffa14.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/contacts")
        return data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
});

export const addContact = createAsyncThunk("todo/addContact", async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post("/contacts", contact)
        return data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
});

export const deleteContact = createAsyncThunk("todo/deleteContact", async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`)
        return data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
});