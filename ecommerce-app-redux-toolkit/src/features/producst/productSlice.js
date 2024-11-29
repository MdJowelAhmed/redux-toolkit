import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
 products:[],
 isLoading: false,
 error: null,
}

export const fetchProducts=createAsyncThunk("products/fetchProducts",async ()=>{
  const res=await axios.get("http://localhost:3001/products");
  return (res.data)
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {  },
  extraReducers: (builder) =>{
    builder
    .addCase(fetchProducts.pending, (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchProducts.fulfilled, (state,action)=>{
      state.isLoading=false;
      state.products=action.payload
    })
    .addCase(fetchProducts.rejected, (state,action)=>{
      state.isLoading=false;
      state.error=action.error.message || "data fetch field"
    })
  }
})



export default productSlice.reducer