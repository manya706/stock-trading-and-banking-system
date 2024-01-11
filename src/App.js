import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Banking from './components/Banking';
// import LoginSignupForm from './components/LoginSignUpForm';
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
        <a href="#Prices">Learn</a>
        <a href="#Contact">
        <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              {/* <button className="btn-secondary">Learn More</button> */}
            </div>
        </a>
      </nav>
    </header>

      {/*new section main home  */}
    <section class="home" id="home">
      
        {/* <div className="background-image"></div>
              <div className="content"> */}
                <div className="home-content">
                <div class="content">
              <div class="main-title">Invest in Your Future</div>
              <div class="sub-title">Start investing today for a brighter tomorrow. Take control of your financial future.</div>
              <button class="cta-btn" onclick="showDetails()">Learn More</button>
          {/* </div> */}

          {/* <script>
              function showDetails() {
                  alert("Explore investment options and financial management tools to secure your future!");
              }
          </script> */}
            {/* <h1>Welcome to Wealth+</h1>
            <h3>Your All-in-One Solution for Personal Finance, Banking, and Trading</h3>
            <p>
              Discover the power of seamless integration between banking and stock trading with Wealth+. 
              Manage your finances, make informed investment decisions, and experience a new level of financial control.
            </p> */}
            {/* <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div> */}
        </div>
        </div>
        <div class="login-container">
        <h2>Welcome Back!</h2>
        <form>
          <p>
            Login to your personal portfolio.
          </p>
            <div class="form-group">
                {/* <label for="username">Username:</label> */}
                <input type="text" id="username" name="username" placeholder='Username' required />
            </div>
            <div class="form-group">
                {/* <label for="password" >Password:</label> */}
                <input type="password" id="password" name="password" placeholder='Password' required />
            </div>
            <div class="form-group forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" class="login-btn">Login</button>
            <p>
              Terms & Conditions applied*.
            </p>
        </form>
    </div>
    </section>
    {/* <section> */}
      {/* <banking/ > */}
      {/* <LoginSignupForm /> */}
    {/* </section> */}
      <footer>
        <p>&copy; 2024 Banking & Stock Trading. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
