import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import StockRow from './components/StockRow';

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker="apple"/>
            <StockRow ticker="Google"/>
            <StockRow ticker="Microsoft"/>
            <StockRow ticker="Tesla"/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
