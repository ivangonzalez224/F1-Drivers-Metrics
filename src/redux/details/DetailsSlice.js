import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDetails = createAsyncThunk(
  'details/getDetails',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbywePr0t-SCseAjMs7DjYBmaXms2K2ov7JIXshjAXPDZhWrLRK2s7PfEli8QAcKNOiTPw/exec',
      );
      const data = response;
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  detailItems: [],
  error: '',
};
const detailsSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.detailItems = action.payload;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default detailsSlice.reducer;
