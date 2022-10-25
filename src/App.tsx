import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './assets/ippon.png';
import './App.scss';

import HomePage from './containers/Home/HomePage';
import UsersPage from './containers/Users/UsersPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div id="header">
          <img src={logo} alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div id={'content'}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/users">
              <UsersPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
