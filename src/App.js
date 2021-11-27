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

  const [tipData, setTipData] = useState({
    billTotal: '',
    tipPercentage: '',
    peopleNo: '',
  });

  const [tipAmount, setTipAmount] = useState('');
  const [total, setTotal] = useState('');

  const billTotalChange = (billTotalInput) => {
    // setBillTotal(billTotalInput);
    setTipData((prevTipData) => {
      return { ...prevTipData, billTotal: billTotalInput };
    });
  };

  const tipPercentageSelect = (percentageInput) => {
    // setTipPercentage(percentageInput);
    setTipData((prevTipData) => {
      return { ...prevTipData, tipPercentage: percentageInput };
    });
  };

  const peopleChange = (peopleNoInput) => {
    // setPeopleNo(peopleNoInput);
    setTipData((prevTipData) => {
      return { ...prevTipData, peopleNo: peopleNoInput };
    });
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
        <ResultCard tipAmount={tipAmount} total={total} data={tipData} />
      </Card>
    </div>
  );
}

export default App;
