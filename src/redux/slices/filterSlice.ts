import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FilterSliceState, FilterType } from '../types/typesRedux';

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
			state.sort = action.payload;
		},
		setPageCount(state, action: PayloadAction<number>) {
			state.pageCount = action.payload;
		},
	},
});

export const selectFilter = (state: RootState) => state.filter;
export const selectFilterSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setPageCount, setSearchValue } =
	filterSlice.actions;

export default filterSlice.reducer;
