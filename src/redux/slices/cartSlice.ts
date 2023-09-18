import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {  items, totalPrice } from '../../utils/getCartFromLS';
import { calsTotalPrice } from '../../utils/calsTotalPrice';
import { CartItemSlice, CartSliceState } from '../types/typesRedux';

const initialState: CartSliceState = {
  totalPrice: totalPrice,
  items: items,
  count: 0,
};

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItemSlice>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calsTotalPrice(state.items)
    },
    minusItems(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj: any) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj: any) => obj.id === !action.payload);
      state.totalPrice = 0;
      
    },
    clearItems(state) {
      localStorage.clear()
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id);

export const { addItems, removeItems, minusItems, clearItems } = cardSlice.actions;

export default cardSlice.reducer;
