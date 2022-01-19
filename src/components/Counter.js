import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './Counter.css';

const Counter = () => {
  return (
    <div className='counter'>
      <AddCircleIcon style={{ fontSize: '60px', color: '#03A82D' }} />
      <RemoveCircleIcon style={{ fontSize: '60px', color: '#F3280C' }} />
    </div>
  );
};

export default Counter;
