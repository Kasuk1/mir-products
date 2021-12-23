import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/products.slice';
import productDetailReducer from '../features/productDetail/productDetail.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetail: productDetailReducer
  },
});
