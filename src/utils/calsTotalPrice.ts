import { CartItemSlice } from '../redux/types/typesRedux';

export const calsTotalPrice = (items: CartItemSlice[]) => {
	return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
