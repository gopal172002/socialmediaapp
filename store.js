// store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
