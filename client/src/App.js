import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/home'
import SignUp from './components/sign-up'
import LogIn from './components/log-in'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/log-in">Log In</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/log-in" component={LogIn} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
