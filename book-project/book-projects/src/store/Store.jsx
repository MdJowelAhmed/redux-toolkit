import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../featured/books/BookSlice"


export const store= configureStore({
    reducer:{
        books:bookReducer
    }
})