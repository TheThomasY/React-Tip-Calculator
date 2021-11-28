import React from 'react';
import person from '../images/icon-person.svg';
import './scss/NoOfPeople.css';

export default function NoOfPeople(props) {
  const peopleChangeHandler = (event) => {
    props.onPeopleChange(event.target.value);
  };

  return (
    <div className='no-of-people'>
      <h4 className='section-title'>Number of People</h4>
      <img className='input-icon icon-person' src={person} alt='Person icon' />
      <input
        onChange={peopleChangeHandler}
        value={props.data.peopleNo}
        className='input-bar'
        type='text'
      />
    </div>
  );
}
