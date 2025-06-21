// components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../store/features/counter/counterSlice.js';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input 
        type="number" 
        onChange={(e) => dispatch(incrementByAmount(Number(e.target.value) || 0))} 
      />
    </div>
  );
};

export default Counter;