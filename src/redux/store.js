import { configureStore } from '@reduxjs/toolkit';
import driversReducer from './drivers/DriversSlice';
import detailsReducer from './details/DetailsSlice';

const store = configureStore({
  reducer: {
    drivers: driversReducer,
    details: detailsReducer,
  },
});

export default store;