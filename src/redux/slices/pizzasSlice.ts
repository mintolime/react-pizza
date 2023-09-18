
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { FetchPizzasArgm, PizzaItem, PizzaSliceState } from '../types/typesRedux';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params: FetchPizzasArgm) => {
  const { categoryId, sort, pageCount, search } = params;

  const { data } = await axios.get<PizzaItem[]>(
    `https://63fabf852027a45d8d5b2850.mockapi.io/items?page=${pageCount}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sort.sortProperty}&order=desc${search}`,
  );

  return data as PizzaItem[];
});

const initialState: PizzaSliceState = {
  items: [],
  status: 'loading',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizzas;
export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
