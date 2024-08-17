import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  addedItems: [],
  cart_qty: 0,
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.addedItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        const updatedItem = {
          ...state.addedItems[existingItemIndex],
          qty: state.addedItems[existingItemIndex].qty + item.qty,
        };
        state.addedItems = [
          ...state.addedItems.slice(0, existingItemIndex),
          updatedItem,
          ...state.addedItems.slice(existingItemIndex + 1),
        ];
      } else {
        state.addedItems = [...state.addedItems, { ...item, qty: item.qty }];
      }
      
      state.cart_qty = state.addedItems.reduce((total, item) => total + item.qty, 0);
    },
    
    removeItem: (state, action) => {
      state.addedItems = state.addedItems.filter(item => item.id !== action.payload.id);
      state.cart_qty = state.addedItems.reduce((total, item) => total + item.qty, 0);
    },

    clearCart: (state) => {
      state.addedItems = [];
      state.cart_qty = 0;
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
