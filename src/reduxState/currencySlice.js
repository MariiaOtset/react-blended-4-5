import { createSlice } from '@reduxjs/toolkit';
import {
  featchBaseCurrency,
  featchExchangeCurrency,
  featchRates,
} from './operation';
const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  reducers: {
    setbaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(featchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(featchExchangeCurrency.pending, state => {
        state.exchangeInfo = null;
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(featchExchangeCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exchangeInfo = action.payload;
      })
      .addCase(featchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.exchangeInfo = null;
      })
      .addCase(featchRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.isLoading = false;
      })
      .addCase(featchRates.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(featchRates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.rates = [];
      });
  },
});
export const { setbaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
