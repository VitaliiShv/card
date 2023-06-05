import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://647ca4c5c0bae2880ad1036e.mockapi.io/api',
});

export const getAllUsers = async () => {
  const { data } = await instance.get('/users');
  return data;
};

// export const getAllProducts = async () => {
//   const { data } = await instance.get('/products');
//   return data;
// };

// export const getProductByRestaurant = async restaurantId => {
//   const { data } = await instance.get(`/products/${restaurantId}`);
//   return data;
// };

// export const getCart = async () => {
//   const { data } = await instance.get('/cart');
//   return data;
// };

// export const addProductToCart = async productId => {
//   const { data } = await instance.put(`/cart/${productId}`);
//   return data;
// };

// export const removeProductFromCart = async productId => {
//   const { data } = await instance.delete(`/cart/${productId}`);
//   return data;
// };

// export const addOrderToList = async data => {
//   const result = await instance.post('/order/', data);
//   return result;
// };
