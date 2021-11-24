import './App.css';
import logo from './images/logo.svg';
import Card from './components/Card';
import BillAmount from './components/BillAmount';
import TipSelect from './components/TipSelect';
import NoOfPeople from './components/NoOfPeople';
import ResultCard from './components/ResultCard';

function App() {
  return (
    <div>
      <img className='main-logo' src={logo} alt='Logo' />
      <Card className='main-card'>
        <div className=''>
          <BillAmount />
          <TipSelect />
          <NoOfPeople />
        </div>
        <ResultCard />
      </Card>
    </div>
  );
}

export default App;
