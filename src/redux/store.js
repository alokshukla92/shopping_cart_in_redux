import { configureStore } from '@reduxjs/toolkit'
import cartCounterSlice from '../redux/slices/cartCounterSlice'
import cartSlice from "../redux/slices/cartSlice"

export const store = configureStore({
  reducer: {
    cartCounter: cartCounterSlice,
    cart: cartSlice
  },
})