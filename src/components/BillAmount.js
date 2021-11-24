import React from 'react';
import dollar from '../images/icon-dollar.svg';
import './scss/BillAmount.css';

export default function BillAmount() {
  return (
    <div className='bill-amount'>
      <h2 className='section-title'>Bill</h2>
      <img className='input-icon icon-dollar' src={dollar} alt='Dollar icon' />
      <input className='input-bar' type='text' />
    </div>
  );
}
