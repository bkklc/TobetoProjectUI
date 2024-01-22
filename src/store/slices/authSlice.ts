// src/store/authSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthLogin } from '../../models/auth';
import { login } from '../../services/authService';


interface AuthState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  user: AuthLogin | null;
  error: string;
}

const initialState: AuthState = {
  loading: 'idle',
  user: null,
  error: '',
};

export const loginUser = createAsyncThunk('auth/loginUser', async ({payload}: { payload:any }) => {
  try {
    const userData = await login(payload);
    return userData;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = action.payload;
        state.error = '';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.user = null;
        state.error = action.error.message || 'Login failed. Please check your credentials.';
      });
  },
});

export const authReducer = authSlice.reducer;
