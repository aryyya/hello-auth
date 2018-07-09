import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import TopBar from './components/top-bar'
import Home from './components/home'
import SignUp from './components/sign-up'
import LogIn from './components/log-in'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="app">
        <Router>
          <div>
            <TopBar />
            <div class="app__page">
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
