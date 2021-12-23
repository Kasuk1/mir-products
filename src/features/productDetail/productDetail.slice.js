import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductDetail = createAsyncThunk(
    'productDetail/getProductDetail',
    async (productId) => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const json = await response.json();
        return json;
    }
);

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        product: {},
        getProductDetailLoading: false,
        getProductDetailError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductDetail.pending, (state) => {
                state.getProductDetailLoading = true;
                state.getProductDetailError = false;
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.getProductDetailLoading = false;
                state.getProductDetailError = false;
                console.log(action.payload);
                state.product = action.payload;
            })
            .addCase(getProductDetail.rejected, (state) => {
                state.getProductDetailLoading = false;
                state.getProductDetailError = true;
            })
    }
});

export const selectProduct = (state) => state.productDetail.product;
export const selectGetProductDetailLoading = (state) => state.productDetail.getProductDetailLoading;
export const selectGetProductDetailError = (state) => state.productDetail.getProductDetailError;

export default productDetailSlice.reducer;