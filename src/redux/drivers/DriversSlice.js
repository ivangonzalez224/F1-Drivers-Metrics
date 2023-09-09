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
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  driverItems: [],
  newList: [],
  error: '',
  counter: 0,
};
const driversSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    initDrivers: (state, action) => {
      state.driverItems = action.payload;
    },
    setFilteredArr: (state, action) => {
      if (state.newList.length === 0) {
        state.newList = state.driverItems;
        return;
      }
      const newList = state.driverItems.filter((nameBrand) => (
        nameBrand.constructor_name.toLowerCase().replace('_', ' ').includes(action.payload.toLowerCase())
      ));
      state.newList = newList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDrivers.fulfilled, (state, action) => {
      state.driverItems = action.payload;
      state.newList = action.payload;
      let sum = 0;
      action.payload.forEach((amount) => {
        sum += amount.num_drivers;
      });
      state.counter = sum;
    });
    builder.addCase(getDrivers.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export const { initDrivers, setFilteredArr } = driversSlice.actions;
export default driversSlice.reducer;
