import React from 'react';
import './scss/ResultCard.css';

export default function ResultCard(props) {
  return (
    <div className='result-card'>
      <div className='amount-container'>
        <div className='amount-text'>
          <div className='amount-total'>Tip Amount</div>
          <div className='per-person'>/ person</div>
        </div>
        <div className='amount-data'>$4.27</div>
      </div>
      <div className='amount-container'>
        <div className='amount-text'>
          <div className='amount-total'>Total</div>
          <div className='per-person'>/ person</div>
        </div>
        <div className='amount-data'>$320.79</div>
      </div>
      <div className='reset-btn'>RESET</div>
    </div>
  );
}
