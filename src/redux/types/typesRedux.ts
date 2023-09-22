export type CartItemSlice = {
	id: string;
	title: string;
	type: string;
	size: number;
	price: number;
	count: number;
	imageUrl: string;
};

export interface CartSliceState {
	totalPrice: number;
	items: CartItemSlice[];
	count: number;
}

export type FilterType = {
	name: string;
	sortProperty: 'rating' | 'price' | 'title';
};

export interface FilterSliceState {
	searchValue: string;
	categoryId: number;
	pageCount: number;
	sort: FilterType;
}

export type FetchPizzasArgm = {
	categoryId: number;
	pageCount: number;
	search: string;
	searchValue: string;
	sort: FilterType;
};

export type PizzaItem = {
	id: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	count: number;
	imageUrl: string;
};

export interface PizzaSliceState {
	items: PizzaItem[];
	status: 'loading' | 'success' | 'error';
}
