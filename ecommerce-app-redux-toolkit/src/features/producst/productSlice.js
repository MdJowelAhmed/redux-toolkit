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
export const deleteProducts=createAsyncThunk("products/deleteProducts",async (id)=>{
  const res=await axios.delete(`http://localhost:3001/products/${id}`);
  console.log(res)
 return id
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
    .addCase(deleteProducts.fulfilled, (state,action)=>{
    state.products=state.products.filter((product)=>product.id !==action.payload)
    });
  }
})



export default productSlice.reducer