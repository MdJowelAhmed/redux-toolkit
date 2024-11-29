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
export const addProducts=createAsyncThunk("products/addProducts",async (product)=>{
  const res=await axios.post(`http://localhost:3001/products/`,product);
 return res.data
 
})
export const deleteProducts=createAsyncThunk("products/deleteProducts",async (id)=>{
  const res=await axios.delete(`http://localhost:3001/products/${id}`);

 return id
})
export const updateProducts=createAsyncThunk("products/updateProducts",async ({id, product})=>{
  const res=await axios.put(`http://localhost:3001/products/${id}`, product);
  console.log(res.data)
 return res.data
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
    .addCase(addProducts.fulfilled, (state,action)=>{
    state.products.push(action.payload)
    })
    .addCase(deleteProducts.fulfilled, (state,action)=>{
    state.products=state.products.filter((product)=>product.id !==action.payload)
    })
    .addCase(updateProducts.fulfilled, (state,action)=>{
   const index=state.products.findIndex((product)=>product.id===action.payload.id)
   state.products[index]=action.payload
    });
  }
})



export default productSlice.reducer