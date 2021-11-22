import React from 'react';

import './scss/BillAmount.css';

export default function BillAmount() {
  return (
    <div>
      <h2 className='bill-title'>Bill</h2>
      <div className='bill-input-container'>
        <p className='bill-currency'>$</p>
        <input className='bill-input' type='text' />
      </div>
    </div>
  );
}
