import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
    count: 0,
}

const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItems(state, action) {
        //     state.items.push(action.payload);
        //     state.totalPrice = state.items.reduce((sum, obj) => {
        //         return obj.price + sum
        //     }, 0)
        // },
        addItems(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload, count: 1,
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        removeItems(state, action) {
            state.items = state.items.filter(obj => obj.id === !action.payload);
        },
        clearItems(state) {
            state.items = []
        },
    }
});

export const { addItems, removeItems, clearItems } = cardSlice.actions;

export default cardSlice.reducer;