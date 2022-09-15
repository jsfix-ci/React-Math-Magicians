/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './pages/Quote';
import Home from './pages/Home';

function App() {
  const text = 'Let\'s do some math! ';
  return (
    <BrowserRouter>
      <div className="cont">
        <div className="nav">
          <Navbar />
          <h1>Math Magicians</h1>
        </div>
        <Switch>
          <Route exact path="/Calculator">
            <div className="main">
              <h3>
                {text}
              </h3>
              <Calculator />
            </div>
          </Route>
          <Route exact path="/Quote">
            <Quote />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
