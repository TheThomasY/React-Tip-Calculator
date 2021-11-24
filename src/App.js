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
        <BillAmount />
        <TipSelect />
        <NoOfPeople />
        <ResultCard />
      </Card>
    </div>
  );
}

export default App;
