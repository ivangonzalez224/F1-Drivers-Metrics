import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDrivers = createAsyncThunk(
  'drivers/getDrivers',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycby7bXHqq5-CZsIVFFdVuuTY_HssvDJ1OB5EI1KoJWZQWrtIhIo-Q6WFFoOv_Fb97w7l/exec',
      );
      const endData = response.data.data;
      let sum = 0;
      endData.forEach((amount) => {
        sum += amount.num_drivers;
      });
      endData.push(sum);
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  driverItems: [],
  error: '',
};
const driversSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    initDrivers: (state, action) => {
      state.driverItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDrivers.fulfilled, (state, action) => {
      state.driverItems = action.payload;
    });
    builder.addCase(getDrivers.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export const { initDrivers } = driversSlice.actions;
export default driversSlice.reducer;
