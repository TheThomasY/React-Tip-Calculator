import React from 'react';

import './scss/TipSelect.css';

export default function TipSelect() {
  return (
    <div className='tip-select'>
      <h3 className='section-title'>Select Tip %</h3>
      <ul className='tip-grid'>
        <li>5%</li>
        <li>10%</li>
        <li>15%</li>
        <li>25%</li>
        <li>50%</li>
        <input className='custom-input-bar' type='text' placeholder='Custom' />
      </ul>
    </div>
  );
}
