import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'customer',
  initialState: { value: 0 },
  reducers: {
    incrementCustomer: (state) => {
      state.value += 1;
    },
    decrementCustomer: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementCustomer, decrementCustomer } = counterSlice.actions;
export default counterSlice.reducer;
