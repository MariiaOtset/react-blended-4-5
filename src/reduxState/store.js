import { currencyReducer } from './currencySlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PURGE,
  REHYDRATE,
  REGISTER,
  PERSIST,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const currencyConfig = {
  key: 'currency',
  version: 1,
  storage,
  whitelist: ['baseCurrency'],
};
export const store = configureStore({
  reducer: {
    currency: persistReducer(currencyConfig, currencyReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
      },
    }),
});
export const persistor = persistStore(store);
