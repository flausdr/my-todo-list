import { createSlice } from "@reduxjs/toolkit";

const cardsMap = new Map()

cardsMap.set('first', [{ id: 'randomFirst', text: ''}])

const initialState = [...cardsMap.entries()]

export const crudSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, { payload }) => {
            const newCardMap = new Map([...cardsMap.entries()])

            newCardMap.set(payload.id, [{id: 'randomSecond', text: payload.obj.text}])
            cardsMap.set(payload.id, [{id: 'randomSecond', text: payload.obj.text}])
            return [...newCardMap.entries()]
        },
        removeCard: (state, { payload }) => {
            const newCardMap = new Map([...cardsMap.entries()])

            newCardMap.delete(payload)
            cardsMap.delete(payload)
            return [...newCardMap.entries()]
        },
        addItemsForCard: (state, { payload }) => {
            console.log(payload)
            const newMap = cardsMap.get(payload.cardId),
                valuesMap = [...newMap.values()]

            console.log(valuesMap)
            valuesMap.push({id: payload.id, text: ''})
            console.log(valuesMap)

            cardsMap.set(payload.cardId, valuesMap)
            return [...cardsMap.entries()]
        }
    }
})

const { actions, reducer } = crudSlice;

export const { addCard, removeCard, addItemsForCard } = actions;

export default reducer;