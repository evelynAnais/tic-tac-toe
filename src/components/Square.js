import React from 'react';

const style = {
  background: 'pink',
  border: '5px solid purple',
  fontSize: '50px',
  fontWeight: '100',
  cursor: 'pointer',
  outline: 'none'
}

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
)

export default Square