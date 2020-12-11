import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <p>Hola</p>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        {/* <Header /> */}
        </Switch>
      </Router>


    </div>
  );
}

export default App;
