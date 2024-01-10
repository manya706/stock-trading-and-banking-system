import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import StockRow from './components/StockRow';

function App() {
  return (
    // <div className="App">
    //   <div className="container">
    //     <table className="table mt-5">
    //       <thead>
    //         <tr>
    //           <th>Ticker</th>
    //           <th>Price</th>
    //           <th>Date</th>
    //           <th>Time</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <StockRow ticker="apple"/>
    //         <StockRow ticker="Google"/>
    //         <StockRow ticker="Microsoft"/>
    //         <StockRow ticker="Tesla"/>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="App">
      <header className="header">
      {/* <a href="stock-trading/src/images/logo-no-background.png" className="logo"></a> */}
      <a href="/" className="logo">
          {/* <img src="./logo-no-background.png" alt="Logo" /> */}
        </a>

      {/* <i class="bx bx-menu" id="menu-icon"></i> */}

      <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#Features">Features</a>
        <a href="#Prices">Product</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>

      {/*new section main home  */}
    <section class="home" id="home">
      
        <div className="background-image"></div>
          <div className="content">
            <div className="home-content">
              {/* <h3>Keep better grip on your finances</h3> */}
              <h1>Wealth+</h1>
              <h3>Your personal <span>Banking & Trading</span> website</h3>
              <p>
                A comprehensive financial platform that seamlessly combines banking and stock trading services.
              </p>
          </div>
        </div>
    </section>
      <footer>
        <p>&copy; 2024 Banking & Stock Trading. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
