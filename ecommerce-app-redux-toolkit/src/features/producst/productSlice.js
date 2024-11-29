import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
 products:[],
 isLoading: false,
 error: null,
}

export const fetchProducts=createAsyncThunk("products/fetchProducts",async ()=>{
  const res=await axios.get("http://localhost:3001/products");
  console.log(res.data)
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
})



export default productSlice.reducer