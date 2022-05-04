import './App.css';
import {BrowserRouter as Router, Routes, Route,}from 'react-router-dom';
import ListEarningsComponent from './components/Earnings/ListEarningsComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import FinstatusHomeComponent from './components/FinstatusHomeComponent';
import ListExpensesComponent from './components/Expenses/ListExpensesComponent';
import EarningsAddComponent from './components/Earnings/EarningsAddComponent';
import EarningSummaryComponent from './components/Earnings/EarningSummaryComponent';


function App() {


  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
              <Route path='/' element={<FinstatusHomeComponent/>}></Route>
              
              <Route path='/earnings' element = {<EarningSummaryComponent />}></Route>
              <Route path='/earnings/summary' element = {<EarningSummaryComponent />}></Route>
              <Route path='/earnings/report' element = {<ListEarningsComponent />}></Route>
              <Route path='/earnings/add' element = {<EarningsAddComponent />}></Route>
              
              <Route path='/expenses' element = {<ListExpensesComponent />}></Route>
              
              
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
