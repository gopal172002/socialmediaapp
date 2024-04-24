// reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import api from '../utils/api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { setUser } = authSlice.actions;

export const loginUser = ({ email, password, router }) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    dispatch(setUser(res.data.result));
    localStorage.setItem('token', res.data.token);
    router.push('/');
  } catch (error) {
    console.error(error);
  }
};

export const signupUser = ({ email, password, router }) => async (dispatch) => {
  try {
    const res = await api.post('/auth/signup', { email, password });
    dispatch(setUser(res.data.result));
    localStorage.setItem('token', res.data.token);
    router.push('/');
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = (router) => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setUser(null));
  router.push('/login');
};

export default authSlice.reducer;
