/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/pages/Calculator';
import Navbar from './components/pages/Navbar';
import Quote from './pages/Quote';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <h3>Math Magicians</h3>
        <Routes>
          <Route exact path="/Calculator">
            <div className="main">
              <Calculator />
            </div>
          </Route>
          <Route exact path="/Quote">
            <Quote />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
