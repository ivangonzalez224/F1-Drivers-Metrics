import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDetails = createAsyncThunk(
  'details/getDetails',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://ergast.com/api/f1/2023/constructors/williams/drivers',
      );
      const data = response;
      return data.data;
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
  reducers: {
    changeDetail: (state, action) => {

    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.detailItems = action.payload;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export const { changeDetail } = detailsSlice.actions;
export default detailsSlice.reducer;
