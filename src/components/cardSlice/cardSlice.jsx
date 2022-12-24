import { createSlice } from "@reduxjs/toolkit";

const cardsMap = new Map()

cardsMap.set('first', [{ id: 'randomFirst', text: ''}])

const initialState = [...cardsMap.entries()]

export const crudSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, { payload }) => {
            const cloneMap = new Map([...cardsMap.entries()])

            cloneMap.set(payload.id, [{id: 'randomSecond', text: payload.obj.text}])
            cardsMap.set(payload.id, [{id: 'randomSecond', text: payload.obj.text}])
            return [...cloneMap.entries()]
        },
        removeCard: (state, { payload }) => {
            const cloneMap = new Map([...cardsMap.entries()])

            cloneMap.delete(payload)
            cardsMap.delete(payload)
            return [...cloneMap.entries()]
        },
        addItemForCard: (state, { payload }) => {
            const cloneMap = cardsMap.get(payload.cardId),
                valuesMap = [...cloneMap.values()]

            valuesMap.push({id: payload.id, text: ''})
            cardsMap.set(payload.cardId, valuesMap)
            return [...cardsMap.entries()]
        },
        removeItemCard: (state, { payload }) => {
            const cloneMap = cardsMap.get(payload.cardId),
                valuesMap = [...cloneMap.values()]

            const newValuesMap = valuesMap.filter(item => item.id !== payload.itemId ? item : null)
            cardsMap.set(payload.cardId, newValuesMap)
            return [...cardsMap.entries()]
        }
    }
})

const { actions, reducer } = crudSlice;

export const { addCard, removeCard, addItemForCard, removeItemCard } = actions;

export default reducer;