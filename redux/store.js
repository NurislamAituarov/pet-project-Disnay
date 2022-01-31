import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './Slice';

export function makeStore() {
  return configureStore({ reducer: { reducer }, devTools: process.env.NODE_ENV !== 'production' });
}

// const store = configureStore({
//   reducer: { reducer },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });

export const store = makeStore();

export const wrapper = createWrapper(makeStore);
