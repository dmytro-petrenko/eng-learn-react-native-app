import { configureStore } from '@reduxjs/toolkit';
import appManageSlice from './reducers/appManageSlice';

export const store = configureStore({
  reducer: {
    appManageSlice: appManageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
