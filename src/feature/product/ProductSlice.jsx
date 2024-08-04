import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );

    return response.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.status = true;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
