import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUserData = createAsyncThunk('users/fetchUserData', 
  async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
});

export const reposUser = createAsyncThunk('users/reposUser', 
  async (username) => {
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`); 
    return repos.data;
});

const initialState = {
  user: null,
  repos: null,
};
    

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { },
  extraReducers: (builder)=>{
    builder.addCase(fetchUserData.fulfilled, (state, action)=>{
      state.user = action.payload
    });
    builder.addCase(reposUser.fulfilled, (state, action) => {
      state.repos = action.payload;
    });
  }
  
})

export const { addCount } = usersSlice.actions

export default usersSlice.reducer