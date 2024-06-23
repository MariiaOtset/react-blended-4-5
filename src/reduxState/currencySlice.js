import { createSlice } from '@reduxjs/toolkit';
import { featchBaseCurrency } from './operation';
const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {
    setbaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(featchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});
export const { setbaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
