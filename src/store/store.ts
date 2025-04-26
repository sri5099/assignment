import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';
import type { DataState } from './features/dataSlice';

export interface RootState {
  data: DataState;
}

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
