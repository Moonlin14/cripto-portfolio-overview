import { configureStore } from "@reduxjs/toolkit";
import currenciesSlice from './currenciesSlice';

export const store =  configureStore({
  reducer: {
    currencies: currenciesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;