// reducers/postSlice.js
import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await api.get('/posts');
    dispatch(setPosts(res.data));
  } catch (error) {
    console.error(error);
  }
};

export const createPost = ({ content, image }) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('content', content);
    formData.append('image', image);

    const res = await api.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch(fetchPosts()); // To refresh the posts after adding a new one
  } catch (error) {
    console.error(error);
  }
};

export default postSlice.reducer;
