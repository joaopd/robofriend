import React, { useState } from 'react';
import './styles.css';
import useDebounce from '../../func/useDebounce';

export default function Title({ value, onChange }) {
  const [displayValue, SetDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChage(event) {
    SetDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <>
      <div className="title">
        <h1>ROBOFRIENDS</h1>
        <input
          placeholder="search robot"
          type="text"
          value={displayValue}
          onChange={handleChage}
        />
      </div>
    </>
  );
}
