import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: [{id: 'first', value: ['random']}]
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
        },
        addItemsForCard: (state, { payload }) => {
            return {
                array: [...state.array.map(item => {
                    if (item.id === payload.id) {
                        item = {
                            id: item.id,
                            value: [...item.value, payload.value]
                        }
                        return item
                    } else {
                        return item
                    }
                })]
            }
        }
    }
})

const { actions, reducer } = crudSlice;

export const { addCard, removeCard, addItemsForCard } = actions;

export default reducer;