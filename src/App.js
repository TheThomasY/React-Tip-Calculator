import './App.css';
import Card from './components/Card';
import BillAmount from './components/BillAmount';
import TipSelect from './components/TipSelect';
import NoOfPeople from './components/NoOfPeople';
import ResultCard from './components/ResultCard';

function App() {
  return (
    <div>
      <div className='main-title'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
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
