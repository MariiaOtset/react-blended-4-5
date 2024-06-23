import { createSlice } from '@reduxjs/toolkit';
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
});
export const { setbaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
