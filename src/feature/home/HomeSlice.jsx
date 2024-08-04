import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetchAllProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

export const HomeSlice = createSlice({
  name: "allProduct",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default HomeSlice.reducer;
