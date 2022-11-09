import logo from './logo.svg';
import './App.css';

import BillingsContainer from './components/BillingsContainer'

function App() {
  return (
    <div className="mainContainer">
      <div className="header">
        <h1>Billing Form</h1>
      </div>
      <BillingsContainer />
    </div>
  );
}

export default App;
