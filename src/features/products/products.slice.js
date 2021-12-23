import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        return json;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        getProductsLoading: false,
        getProductsError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.getProductsLoading = true;
                state.getProductsError = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.getProductsLoading = false;
                state.getProductsError = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.getProductsLoading = false;
                state.getProductsError = true;
            })
    }
});

export const selectProducts = (state) => state.products.products;
export const selectGetProductsLoading = (state) => state.products.getProductsLoading;
export const selectGetProductsError = (state) => state.products.getProductsError;

export default productsSlice.reducer;