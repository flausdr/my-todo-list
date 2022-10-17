import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cardsList = createEntityAdapter();

const initialState = cardsList.getInitialState({
    status: 'add',
});

export const crudSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
    }
})

const { actions, reducer } = crudSlice;

export const { addCard, removeCard } = actions;

export default reducer;