import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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

export const { setCategoryId, setSort, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
