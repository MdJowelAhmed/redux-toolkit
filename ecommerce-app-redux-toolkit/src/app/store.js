import { configureStore } from '@reduxjs/toolkit'
import  productReducer  from '../features/producst/productSlice'

export const store = configureStore({
  reducer: {
    productsR:productReducer
  },
})