import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDrivers = createAsyncThunk(
  'driverss/getDrivers',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://ergast.com/api/f1/drivers.json',
      );
      const data = response;
      const endData = data.data.MRData.DriverTable.Drivers;
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
    checkDriver: (state, action) => {

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
export const { checkDriver } = driversSlice.actions;
export default driversSlice.reducer;
