import React, { useState } from 'react';
import './scss/TipSelect.css';

export default function TipSelect(props) {
  const [selectedTip, setSelectedTip] = useState('');
  const [customTip, setCustomTip] = useState('');

  const percentageSelectHandler = (event) => {
    props.onPercentageSelect(event.target.id);
    setSelectedTip(event.target.id);
    setCustomTip('');
  };

  const percentageChangeHandler = (event) => {
    props.onPercentageSelect(event.target.value);
    setCustomTip(event.target.value);
    setSelectedTip('');
  };

  return (
    <div className='tip-select'>
      <h3 className='section-title'>Select Tip %</h3>
      <ul className='tip-grid'>
        <li
          id='5'
          onClick={percentageSelectHandler}
          className={selectedTip === '5' && 'selected'}
        >
          5%
        </li>
        <li
          id='10'
          onClick={percentageSelectHandler}
          className={selectedTip === '10' && 'selected'}
        >
          10%
        </li>
        <li
          id='15'
          onClick={percentageSelectHandler}
          className={selectedTip === '15' && 'selected'}
        >
          15%
        </li>
        <li
          id='25'
          onClick={percentageSelectHandler}
          className={selectedTip === '25' && 'selected'}
        >
          25%
        </li>
        <li
          id='50'
          onClick={percentageSelectHandler}
          className={selectedTip === '50' && 'selected'}
        >
          50%
        </li>
        <input
          onChange={percentageChangeHandler}
          value={customTip}
          className='custom-input-bar'
          type='text'
          placeholder='Custom'
        />
      </ul>
    </div>
  );
}
