import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
    filter: ''
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setContactsFilter(state, action) {
            state.filter = action.payload;
        }
    }
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;