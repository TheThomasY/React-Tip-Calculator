import React from 'react';
import person from '../images/icon-person.svg';
import './scss/NoOfPeople.css';

export default function NoOfPeople() {
  return (
    <div className='no-of-people'>
      <h4 className='section-title'>Number of People</h4>
      <img className='input-icon icon-person' src={person} alt='Person icon' />
      <input className='input-bar' type='text' />
    </div>
  );
}
