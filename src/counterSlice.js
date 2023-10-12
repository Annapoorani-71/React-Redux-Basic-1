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
    incrementValueCustomer: (state, action) => {
      state.value += action.payload;
    },
    decrementValueCustomer: (state, action) => {
      state.value -= action.payload;
    },
    resetCustomerCount: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementCustomer, decrementCustomer, incrementValueCustomer, decrementValueCustomer, resetCustomerCount } = counterSlice.actions;
export default counterSlice.reducer;
