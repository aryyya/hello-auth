import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TopBar from './components/top-bar'
import Home from './components/home'
import SignUp from './components/sign-up'
import LogIn from './components/log-in'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <TopBar />
            <div className="app__page">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/log-in" component={LogIn} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
