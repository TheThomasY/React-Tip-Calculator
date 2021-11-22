import React from 'react';
import BillAmount from './BillAmount';

import './scss/Card.css';

export default function Card() {
  return (
    <div className='card'>
      <BillAmount />
    </div>
  );
}
