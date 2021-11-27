import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.svg';
import Card from './components/Card';
import BillAmount from './components/BillAmount';
import TipSelect from './components/TipSelect';
import NoOfPeople from './components/NoOfPeople';
import ResultCard from './components/ResultCard';

function App() {
  const [billTotal, setBillTotal] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [peopleNo, setPeopleNo] = useState('');

  const billTotalChange = (billTotal) => {
    setBillTotal(billTotal);
  };

  const tipPercentageSelect = (percentage) => {
    setTipPercentage(percentage);
  };

  const peopleChange = (peopleNo) => {
    setPeopleNo(peopleNo);
  };

  return (
    <div>
      <img className='main-logo' src={logo} alt='Logo' />
      <Card className='main-card'>
        <div className=''>
          <BillAmount onBillChange={billTotalChange} />
          <TipSelect onPercentageSelect={tipPercentageSelect} />
          <NoOfPeople onPeopleChange={peopleChange} />
        </div>
        <ResultCard
          billTotal={billTotal}
          tip={tipPercentage}
          people={peopleNo}
        />
      </Card>
    </div>
  );
}

export default App;
