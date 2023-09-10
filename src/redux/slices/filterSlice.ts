import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type FilterType = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title';
}

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort: FilterType;
}

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<FilterType>) {
      // console.log(state)
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      // console.log(state)
      state.pageCount = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectFilterSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setPageCount, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
