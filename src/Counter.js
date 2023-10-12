import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCustomer, decrementCustomer } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrementCustomer())}>Customer Arrived</button>
      <span>&nbsp;{ count }&nbsp;</span>
      <button onClick={() => dispatch(decrementCustomer())}>Custore Gone</button> 
    </div>
  );
}
