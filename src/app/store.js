import { configureStore } from '@reduxjs/toolkit';
import crudReducer from '../components/desk/crudSlice';

export const store = configureStore({
  reducer: {
    counter: crudReducer,
  },
});