import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      // console.log(state)
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      // console.log(state)
      state.pageCount = action.payload;
    },
  },
});

export const selectFilter = state => state.filter;
export const selectFilterSort = state => state.filter.sort;

export const { setCategoryId, setSort, setPageCount,setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
