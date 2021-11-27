import './scss/ResultCard.css';

export default function ResultCard(props) {
  let billTotal = parseFloat(props.data.billTotal);
  let tipPercentage = parseFloat(props.data.tipPercentage);
  let peopleNo = parseInt(props.data.peopleNo);

  let tipAmount = (billTotal * (tipPercentage / 100)) / peopleNo;
  let split = billTotal / peopleNo + tipAmount;

  return (
    <div className='result-card'>
      <div className='amount-container'>
        <div className='amount-text'>
          <div className='amount-total'>Tip Amount</div>
          <div className='per-person'>/ person</div>
        </div>
        <div className='amount-data'>
          {'$'}
          {!isNaN(tipAmount) ? tipAmount.toFixed(2) : ''}
        </div>
      </div>
      <div className='amount-container'>
        <div className='amount-text'>
          <div className='amount-total'>Total</div>
          <div className='per-person'>/ person</div>
        </div>
        <div className='amount-data'>
          {'$'}
          {!isNaN(split) ? split.toFixed(2) : ''}
        </div>
      </div>
      <div className='reset-btn'>RESET</div>
    </div>
  );
}
