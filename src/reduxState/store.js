import { currencyReducer } from './currencySlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
