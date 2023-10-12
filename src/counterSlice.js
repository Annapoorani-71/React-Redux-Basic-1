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
  },
});
export const { incrementCustomer, decrementCustomer, incrementValueCustomer, decrementValueCustomer } = counterSlice.actions;
export default counterSlice.reducer;
