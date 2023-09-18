import { calsTotalPrice } from './calsTotalPrice';

const getCartFromLS = () => {
  const dataLS = localStorage.getItem('cart');
  const items = dataLS ? JSON.parse(dataLS) : [];
  const totalPrice = calsTotalPrice(items);

  return {
    items, totalPrice
  }

}

export const { items, totalPrice } = getCartFromLS()