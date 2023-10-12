import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Counter.css'; // Import the CSS file
import {
  incrementCustomer,
  decrementCustomer,
  incrementValueCustomer,
  decrementValueCustomer,
  resetCustomerCount, // Add the reset action
} from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const handleValueIncrement = () => {
    dispatch(incrementValueCustomer(amount));
  };
  const handleValueDecrement = () => {
    dispatch(decrementValueCustomer(amount));
  }

  const handleReset = () => {
    dispatch(resetCustomerCount());
  };

  return (
    <div className="container">
      <button className="button" onClick={handleValueIncrement}>Customervalue Arrived</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        className="input"
      />
      <button className="button" onClick={handleValueDecrement}>Customervalue Gone</button>
      <button className="button" onClick={() => dispatch(incrementCustomer())}>Customer Arrived</button>
      <span className="value">{count}</span>
      <button className="button" onClick={() => dispatch(decrementCustomer())}>Customer Gone</button>
      <br></br>
      <button className="button reset-button" onClick={handleReset}>Reset Count</button>
    </div>
  );
}