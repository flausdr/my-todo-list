import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../components/cardSlice/cardSlice';

export const store = configureStore({
  reducer: {
    counter: cardSlice,
  },
});