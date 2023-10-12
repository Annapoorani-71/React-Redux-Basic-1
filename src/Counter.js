import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button> {/* Pass the function for increment */}
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button> {/* Pass the function for decrement */}
    </div>
  );
}
