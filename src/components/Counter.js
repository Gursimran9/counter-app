import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={`counter ${counter >= 0 ? 'positive' : 'negative'}`}>
      <AddCircleIcon
        style={{ fontSize: '60px', color: '#03A82D' }}
        onClick={() => setCounter(counter + 1)}
      />
      <h1>{counter}</h1>
      <RemoveCircleIcon
        style={{ fontSize: '60px', color: '#F3280C' }}
        onClick={() => setCounter(counter - 1)}
      />
    </div>
  );
};

export default Counter;
