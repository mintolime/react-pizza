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
        // plusItem(state, action){
        //     const findItem = state.items.find(obj => obj.id === action.payload)
        //     if (findItem) {
        //         findItem.count++
        //     }
        // },
        minusItems(state, action){
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem) {
                findItem.count--
            }
        },
        removeItems(state, action) {
            state.items = state.items.filter(obj => obj.id === !action.payload);
            state.totalPrice = 0;
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0;
        },
    }
});

export const { addItems, removeItems,minusItems, clearItems } = cardSlice.actions;

export default cardSlice.reducer;