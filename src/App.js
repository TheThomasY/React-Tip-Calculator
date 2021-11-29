import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.svg';
import Card from './components/Card';
import BillAmount from './components/BillAmount';
import TipSelect from './components/TipSelect';
import NoOfPeople from './components/NoOfPeople';
import ResultCard from './components/ResultCard';

function App() {
  const [tipData, setTipData] = useState({
    billTotal: '',
    tipPercentage: '',
    peopleNo: '',
  });

  // Used to reset the custom input value
  const [customTip, setCustomTip] = useState('');

  const billTotalChange = (billTotalInput) => {
    setTipData((prevTipData) => {
      return { ...prevTipData, billTotal: billTotalInput };
    });
  };

  const tipPercentageSelect = (percentageInput) => {
    setTipData((prevTipData) => {
      return { ...prevTipData, tipPercentage: percentageInput };
    });
    setCustomTip('');
  };

  const tipPercentageCustom = (customValue) => {
    setTipData((prevTipData) => {
      return { ...prevTipData, tipPercentage: customValue };
    });
    setCustomTip(customValue);
  };

  const peopleChange = (peopleNoInput) => {
    setTipData((prevTipData) => {
      return { ...prevTipData, peopleNo: peopleNoInput };
    });
  };

  const resetAll = () => {
    setTipData({
      billTotal: '',
      tipPercentage: '',
      peopleNo: '',
    });
    setCustomTip('');
  };

  return (
    <div>
      <img className='main-logo' src={logo} alt='Logo' />
      <Card className='main-card'>
        <div className=''>
          <BillAmount onBillChange={billTotalChange} data={tipData} />
          <TipSelect
            onPercentageSelect={tipPercentageSelect}
            data={tipData}
            customValue={customTip}
            onPercentageCustom={tipPercentageCustom}
          />
          <NoOfPeople onPeopleChange={peopleChange} data={tipData} />
        </div>
        <ResultCard data={tipData} onReset={resetAll} />
      </Card>
    </div>
  );
}

export default App;
