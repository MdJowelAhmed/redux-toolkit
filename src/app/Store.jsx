import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featured/counter/CounterSlice";
import postReducer from "./featured/posts/PostSlice"
const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer
  },
});

export default store;
