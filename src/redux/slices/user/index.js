import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchIpInfo from './fetchIpInfo';

/*
 * ASYNC ACTIONS
 */
export const fetch_ip_info = createAsyncThunk(
  'user/fetch_ip_info',
  fetchIpInfo,
);

/*
 * STORE
 */
const uiSlice = createSlice({
  name: 'user',
  initialState: {
    random_number: 0,
    ip: false,
    ip_isp: '',
    ip_location: '',
  },
  reducers: {
    new_random_number: (state) => {
      state.random_number = (Math.random() * 100).toFixed(0);
    },
  },
  extraReducers: (builder) => {
    // fetch_ip_info
    builder.addCase(fetch_ip_info.fulfilled, (state, action) => {
      state.ip = action.payload.ip;
      state.ip_location = action.payload.location;
      state.ip_isp = action.payload.isp;
      state.random_number = (Math.random() * 100).toFixed(0);
    });
  },
});

export const { new_random_number } = uiSlice.actions;

export default uiSlice.reducer;
