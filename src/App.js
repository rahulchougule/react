import React, { Component } from 'react';
import Login from './containers/Login';
import HomePage from './containers/HomePage';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>

          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/homepage' component={HomePage}/>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
