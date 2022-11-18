import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: [{id: 'first'}]
}

export const crudSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, { payload }) => {
            return {
                array: [...state.array, payload]
            }
        },
        removeCard: (state, { payload }) => {
            return {
                array: [...state.array.filter(item => item.id !== payload)]
            }
        }
    }
})

const { actions, reducer } = crudSlice;

export const { addCard, removeCard } = actions;

export default reducer;