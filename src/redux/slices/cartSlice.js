import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  addedItems: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products'); 
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await response.json(); 
  
  return data; 
});


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.addedItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.addedItems = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.addedItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
