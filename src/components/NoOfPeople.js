import React, { useState } from 'react';
import person from '../images/icon-person.svg';
import './scss/NoOfPeople.css';

export default function NoOfPeople(props) {
  const [errorMessage, setErrorMessage] = useState('');

  const peopleChangeHandler = (event) => {
    let inputAsInt = parseInt(event.target.value);

    if (inputAsInt === 0) {
      setErrorMessage("Can't be zero");
    } else if (inputAsInt < 0) {
      setErrorMessage("Can't be <0");
    } else {
      setErrorMessage('');
    }
    props.onPeopleChange(event.target.value);
  };

  return (
    <div className='no-of-people'>
      <div className='input-header'>
        <h4 className='section-title'>Number of People</h4>
        {errorMessage !== '' && (
          <div className='input-error'>{errorMessage}</div>
        )}
      </div>
      <img className='input-icon icon-person' src={person} alt='Person icon' />
      <input
        onChange={peopleChangeHandler}
        value={props.data.peopleNo}
        className='input-bar'
        className={errorMessage ? 'input-bar input-bar-error' : 'input-bar'}
        type='text'
      />
    </div>
  );
}
